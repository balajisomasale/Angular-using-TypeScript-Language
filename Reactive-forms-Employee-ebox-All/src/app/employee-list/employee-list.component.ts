import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Employee } from 'src/model/employee';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  implements OnInit{
 
  employeeList:Employee[];
  deplist:Department[];

constructor(private service:EmployeeService,private route:ActivatedRoute,private Depser:DepartmentService)
{}

ngOnInit(){


this.service.getAllEmployees().subscribe(data=>this.employeeList=data);

//this.Depser.getAllDepartment().subscribe(data=>this.deplist=data);
}
delete($event)
{


  const id=$event.target.value;


  var msg:String;

  this.service.deleteEmployee(+id).subscribe()

}








}
