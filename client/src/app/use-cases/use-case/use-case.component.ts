///<reference path="../../shared/strings.ts"/>
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../shared/data.service";
import {Config} from "../../shared/strings";
import {UseCaseVO, MilestonesVO} from "../use-case.models";

@Component({
    selector: "use-case",
    templateUrl: "use-case.component.html",
    styleUrls: ["use-case.scss"],
})
export class UseCaseComponent implements OnInit, OnDestroy {
    public useCaseId: string;
    public useCase: UseCaseVO;
    public milestones: MilestonesVO[];
    private container;
    private items;
    private options;
    private timeline;

    constructor(private route: ActivatedRoute,
                private dataService: DataService) {
        this.useCaseId = "";
        this.useCase = new UseCaseVO();
        this.milestones = [];
        this.container = {};
    }

    ngOnInit() {

        this.route.params.subscribe(params => {

            this.useCaseId = params['id'];
            let url = Config.baseUrl + Config.cases + "/" + this.useCaseId;

            this.dataService.getData(url).subscribe(
                data => {
                    this.useCase = <UseCaseVO>data;
                    this.milestones = this.useCase.milestones;
                    if (this.milestones) {
                        this.loadVisJs();
                    }
                }
            );
        });
    }

    private loadVisJs() {
        let dataSet = [];
        this.milestones.forEach((milestone: MilestonesVO) => {
            dataSet.push({
                content: milestone.name,
                start: milestone.start_date,
                end: milestone.end_date
            })
        });


        this.container = document.getElementById('visualization');
        this.container.style.display = 'block';

        // Create a DataSet (allows two way data-binding)
        this.items = new vis.DataSet(dataSet);

        // Configuration for the Timeline
        this.options = {};

        // Create a Timeline
        this.timeline = new vis.Timeline(this.container, this.items, this.options);
    }

    ngOnDestroy() {
        this.timeline.destroy();
        this.container.style.display = 'none';
        this.container = null;
        this.items = null;
        this.options = null;
        this.timeline = null;

    }


}