import {Component, OnInit} from '@angular/core';
import {DataService} from "../shared/data.service";
import {Config} from "../shared/strings";

@Component({
    selector: 'use-cases',
    styleUrls: ['use-cases.component.scss'],
    templateUrl: 'uses-cases.component.html',
})
export class UseCasesComponent implements OnInit {

    public useCases;

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {

        let url = Config.baseUrl + Config.cases;

        this.dataService.getData(url).subscribe(
            data => {
                this.useCases = data;
            },
            error => {
                console.log(error);

            }
        );
    }
}
