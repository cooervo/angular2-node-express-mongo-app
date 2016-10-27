import {Component, OnInit} from '@angular/core';
import {UseCaseService} from "../shared/use-case.service";

@Component({
  selector: 'my-use-cases',
  styleUrls: ['use-cases.component.css'],
  templateUrl: 'uses-cases.component.html'
})
export class UseCasesComponent implements OnInit{

  public useCases;

  constructor(private useCaseService: UseCaseService){ }

  ngOnInit(): void {
    this.useCaseService.getData().subscribe(
      data => {
        this.useCases = data;
      },
      error => {
        console.log(error);

      }
    );
  }
}
