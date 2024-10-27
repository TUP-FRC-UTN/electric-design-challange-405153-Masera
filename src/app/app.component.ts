import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BudgetFormComponent } from "./budget-form/budget-form.component";
import { BudgetListComponent } from "./budget-list/budget-list.component";
import { BudgetViewComponent } from './budget-view/budget-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BudgetFormComponent, BudgetListComponent, BudgetViewComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'electric-design-challange';
}
