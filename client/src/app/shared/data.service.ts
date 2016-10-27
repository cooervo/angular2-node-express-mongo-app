import {Injectable} from '@angular/core';
import {Http, Response, RequestOptionsArgs, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class DataService {

    constructor(private http: Http) {
    }

    public getData(url: string): Observable<Response> {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public postData(url: string, body, headers?): Observable<Response> {

        return this.http.post(url, body, headers)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server   error';
        return Observable.throw(errMsg);
    }

}