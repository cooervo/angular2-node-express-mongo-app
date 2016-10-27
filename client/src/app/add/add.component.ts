import {Component} from "@angular/core";
import {DataService} from "../shared/data.service";
import {Config} from "../shared/strings";
import {Headers, Http, Response} from "@angular/http";
import {error} from "util";
import {Observable} from "rxjs";

@Component({
    selector: "add",
    styleUrls: ["add.component.scss"],
    templateUrl: "add.component.html"
})
export class AddComponent {
    public title: string;
    public body: string;

    constructor(private dataService: DataService,
                private http: Http) {
        this.title = "";
        this.body = "";
    }

    public addUseCase() {

        let url = Config.baseUrl + Config.case;
        console.log("url", url); // --> http://localhost:3001/case

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let body = JSON.stringify({title: this.title, body: this.body})

        this.dataService.postData(url, body, {headers: headers}).subscribe(
            data => {
                console.log("data", data);
            },
            error => {
                console.log("error", error);

            }
        );
    }
}
