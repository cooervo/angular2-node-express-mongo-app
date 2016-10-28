///<reference path="../../shared/strings.ts"/>
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../shared/data.service";
import {Config} from "../../shared/strings";
import {UseCaseVO} from "../use-case.models";

@Component({
    selector: "use-case",
    templateUrl: "use-case.component.html"
})
export class UseCaseComponent implements OnInit {
    public useCaseId: string;
    public useCase: UseCaseVO;

    constructor(private route: ActivatedRoute,
                private dataService: DataService) {
        this.useCase = new UseCaseVO();
    }

    ngOnInit() {

        this.route.params.subscribe(params => {

            this.useCaseId = params['id'];
            let url = Config.baseUrl + Config.cases + "/" + this.useCaseId;

            this.dataService.getData(url).subscribe(
                data => {
                    console.log(data);

                     this.useCase = <UseCaseVO>data;
                    console.log(this.useCase);
                },
                error => {
                    console.log(error);

                }
            );

        });

    }

}