import {Component} from "@angular/core";
import {DataService} from "../shared/data.service";
import {Config} from "../shared/strings";
import {error} from "util";

@Component({
    selector: "add",
    styleUrls: ["add.component.scss"],
    templateUrl: "add.component.html"
})
export class AddComponent {
    public title: string;
    public body: string;

    constructor(private dataService: DataService) {
    }

    public addUseCase() {
        let url = Config.baseUrl + Config.case;
        let body: JSON = JSON.parse('{"title": ' +this.title +', "body": '+this.body+'}');
        this.dataService.postData(url, body).subscribe(
            data => {
                console.log(data)
            },
            error => {
                console.log(error)

            }
        );
    }
}
