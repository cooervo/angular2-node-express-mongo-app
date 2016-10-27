import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {routeConfig} from "./app.routes";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AddComponent} from './add/add.component';
import {UseCasesComponent} from './use-cases/use-cases.component';
import {DataService} from "./shared/data.service";
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {UseCaseComponent} from "./use-cases/use-case/use-case.component";

@NgModule({
    declarations: [
        AppComponent,
        AddComponent,
        UseCaseComponent,
        UseCasesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routeConfig),
        MaterialModule.forRoot()
    ],
    providers: [
        DataService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}

