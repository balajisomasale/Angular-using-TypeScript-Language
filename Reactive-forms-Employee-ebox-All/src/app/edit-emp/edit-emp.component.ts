import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/model/employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {

 
  employeeList:Employee;

deplist:Department;
  constructor(private service:EmployeeService,private route:ActivatedRoute,private depserv:DepartmentService){}
ngOnInit(){
  const Id=this.route.snapshot.paramMap.get('id');

  this.service.getEmployee(+Id).subscribe(data=>this.employeeList=data);


this.depserv.getAllDepartment().subscribe(data=>this.deplist=data);
  
}

}
