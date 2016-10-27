import {Routes} from '@angular/router';
import {AddComponent} from './add/add.component';
import {UseCasesComponent} from './use-cases/use-cases.component';
import {UseCaseComponent} from "./use-cases/use-case/use-case.component";

export const routeConfig: Routes = [
    {path: '', redirectTo: 'use-cases', pathMatch: 'full'},
    {path: 'use-cases', component: UseCasesComponent,
        children: [
            {
                path: '/:id',
                component: UseCaseComponent,
            }
        ]
    },
    {path: 'add', component: AddComponent},
    {path: '**', redirectTo: 'use-cases'},
];

