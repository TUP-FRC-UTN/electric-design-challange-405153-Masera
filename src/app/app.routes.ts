import { Routes } from '@angular/router';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BuggetNewFormComponent } from './bugget-new-form/bugget-new-form.component';

export const routes: Routes = [

    { path: 'electroMan', component: BudgetViewComponent},
    { path: 'listado', component: BudgetListComponent },
    { path: 'nuevo', component: BuggetNewFormComponent },
    //{ path: 'reproducir/:id', component: MusicPlayerComponent },
    { path: '', redirectTo: 'electroMan', pathMatch: 'full'}
];
