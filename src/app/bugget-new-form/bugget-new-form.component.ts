import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModuleTypesServiceService } from '../api-service/module-types-service.service';
import { ModuleType } from '../models/budget';

@Component({
  selector: 'app-bugget-new-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bugget-new-form.component.html',
  styleUrl: './bugget-new-form.component.css'
})
export class BuggetNewFormComponent implements OnInit {

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
