import {Component} from "@angular/core";
import {DataService} from "../shared/data.service";
import {Config} from "../shared/strings";
import {Headers, Http} from "@angular/http";
import {error} from "util";
import {Router} from "@angular/router";

@Component({
    selector: "add",
    styleUrls: ["add.component.scss"],
    templateUrl: "add.component.html"
})
export class AddComponent {
    public title: string;
    public body: string;
    public isValid: boolean;

    constructor(private dataService: DataService,
                private router: Router) {
        this.title = "";
        this.body = "";
        this.isValid = true;
    }

    public addUseCase() {

        if(this.validator()){
            let url = Config.baseUrl + Config.case;
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            let body = JSON.stringify({title: this.title, body: this.body})

            this.dataService.postData(url, body, {headers: headers}).subscribe(
                data => {
                    this.router.navigateByUrl('');

                },
                error => {
                    console.log("error", error);

                }
            );

        }
    }

    private validator() {
        this.isValid = this.title.length >= 1 && this.body.length >= 1;
        return this.isValid;
    }
}
