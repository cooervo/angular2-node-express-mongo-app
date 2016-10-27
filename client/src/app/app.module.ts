import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AboutComponent} from './about/about.component';
import {UseCasesComponent} from './use-cases/use-cases.component';
import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
import {RepoListComponent} from './github/repo-list/repo-list.component';
import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {UseCaseService} from "./shared/use-case.service";
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        RepoBrowserComponent,
        RepoListComponent,
        RepoDetailComponent,
        UseCasesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(rootRouterConfig),
        MaterialModule.forRoot()
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        UseCaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

