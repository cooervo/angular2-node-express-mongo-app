import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AddComponent} from './add/add.component';
import {UseCasesComponent} from './use-cases/use-cases.component';
import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
import {RepoListComponent} from './github/repo-list/repo-list.component';
import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {DataService} from "./shared/data.service";
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";

@NgModule({
    declarations: [
        AppComponent,
        AddComponent,
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
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

