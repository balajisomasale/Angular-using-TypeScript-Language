import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../Employee';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     

     getEmployees()
  {
    let username=''
    let password=''
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    
       return this.httpClient.get<Employee[]>('http://localhost:8083/spring-learn-services/employees',{headers});
  }
  

  // public deleteEmployee(employee) {
  //   let username='javainuse'
  //   let password='password'
  // //alert(employee.empId)
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   return this.httpClient.delete<Employee>("http://localhost:8083/spring-learn-services/updateemployee" + "/"+employee.empId,{headers});
  // }

  public createEmployee(employee) {
    let username=''
    let password=''
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<Employee>("http://localhost:8083/spring-learn-services/addemployee", employee,{headers});
  }
}