import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleType } from './../models/budget';

@Injectable({
  providedIn: 'root'
})
export class ModuleTypesServiceService {

  private readonly http: HttpClient = inject(HttpClient);
  private readonly url: string = 'http://localhost:3000/module-types';

  constructor() { }

  getModuleTypes(): Observable<ModuleType[]> {

    return this.http.get<ModuleType[]>(this.url);
  
  }
}
