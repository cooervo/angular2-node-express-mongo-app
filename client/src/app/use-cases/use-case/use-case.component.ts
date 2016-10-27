import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "use-case",
    templateUrl: "use-case.component.html"
})
export class UseCaseComponent implements OnInit {
    public useCaseId: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {

        this.route.params.subscribe(params => {
            this.useCaseId = params['id'];

        });

    }

}