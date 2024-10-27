import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModuleTypesServiceService } from '../api-service/module-types-service.service';
import { ModuleType } from '../models/budget';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './budget-form.component.html',
  styleUrl: './budget-form.component.css',
})
export class BudgetFormComponent implements OnInit{
  /* ADDITIONAL DOCS:
    - https://angular.dev/guide/forms/typed-forms#formarray-dynamic-homogenous-collections
    - https://dev.to/chintanonweb/angular-reactive-forms-mastering-dynamic-form-validation-and-user-interaction-32pe
  */
   //Formulario Base
   private readonly moduleTipeService = inject(ModuleTypesServiceService);

   moduleTypes : ModuleType[] = [];

   formBudget = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    modules: new FormArray([]) //vacio inicialmente
  });
  
  ngOnInit(): void {
    this.moduleTipeService.getModuleTypes().subscribe({
      next: (data: ModuleType[]) => {
        this.moduleTypes = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  };

  get modules(): FormArray {
    return this.formBudget.get('modules') as FormArray;
  }
  addModule(): void{
    const moduleGroup = new FormGroup({
      type: new FormControl(''),
      price: new FormControl(''),
      zone: new FormControl(''),
      slots: new FormControl('')
    });

    this.modules.push(moduleGroup);
  }

  removeModule(index: number): void {
    this.modules.removeAt(index);
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    console.log(this.formBudget.value);
  }
}
