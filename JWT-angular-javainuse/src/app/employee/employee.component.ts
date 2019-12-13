import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:Employee[];
    
  user: Employee = new Employee("","","","","");

  constructor(
    private httpClientService:HttpClientService
  ) { }

  ngOnInit() {
     this.httpClientService.getEmployees().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }

handleSuccessfulResponse(response)
{
    this.employees=response;
}
createEmployee(): void {
  this.httpClientService.createEmployee(this.user)
      .subscribe( data => {
        alert("Employee created successfully.");
      });

};

// deleteEmployee(employee: Employee): void {
//    this.httpClientService.deleteEmployee(employee)
//      .subscribe( data => {
//       this.employees = this.employees.filter(u => u !== employee);
//    })
// };


}