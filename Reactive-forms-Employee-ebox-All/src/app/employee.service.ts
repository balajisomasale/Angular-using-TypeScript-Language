import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/model/employee';
import { Department } from './department';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

url="http://localhost:8083/spring-learn-services/allemployee";

getAllEmployees():Observable<Employee[]>
{


  return this.http.get<Employee[]>(this.url);
}


//url1="http://localhost:8083/employees/{id}"
getEmployee(id:number):Observable<any>
{
return this.http.get<Employee>(this.url+"/"+id);  


}

getAllDepartment():Observable<any>
{
  return this.http.get<Department>(this.url);
}


updateEmployee(employee: Employee,id:number): Observable<void> {
  return this.http.put<void>(this.url+"/"+id,employee,httpOptions);
}


deleteEmployee(id:number):Observable<void>{

  return this.http.delete<void>(this.url+"/"+id);
}

}
