import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService{

  constructor(private http:HttpClient) { }
  url="http://localhost:8083/departments";




  

  getAllDepartment():Observable<any>
  {
  
  
    return this.http.get<Department>(this.url);
  }




  
}
