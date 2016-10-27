import {Routes} from '@angular/router';
import {AddComponent} from './add/add.component';
import {UseCasesComponent} from './use-cases/use-cases.component';
import {RepoBrowserComponent} from './github/repo-browser/repo-browser.component';
import {RepoListComponent} from './github/repo-list/repo-list.component';
import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'use-cases', pathMatch: 'full'},
  {path: 'use-cases', component: UseCasesComponent},
  {path: 'add', component: AddComponent},
  {path: 'github', component: RepoBrowserComponent,
    children: [
      {path: '', component: RepoListComponent},
      {path: ':org', component: RepoListComponent,
        children: [
          {path: '', component: RepoDetailComponent},
          {path: ':repo', component: RepoDetailComponent}
        ]
      }]
  }
];

