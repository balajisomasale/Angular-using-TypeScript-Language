import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Department } from '../department';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent  {

  Employee1:Employee={id:"EM003",name:"John",salary:10000,permanent:true,department:{id:1,name:"Payroll"},skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"}],da:new Date('12/31/2020')};

  department1: Department[]= [{ id: 1, name: "Payroll" },
    { id: 2, name: "Internal" },
    { id: 3, name: "HR" }
  ];

  onSubmit()
  {

console.log("Name:"+this.Employee1);
// console.log("Salary:"+this.Employee1.salary);
// console.log("Department:"+this.Employee1.department.name);
// console.log("permanent:"+this.Employee1.permanent);



  }


}
