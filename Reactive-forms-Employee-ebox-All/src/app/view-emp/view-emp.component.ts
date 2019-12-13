import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-emp'
  
  
  
  ,
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent {

  
Employee1:Employee={id:"EM003",name:"John",salary:10000,permanent:true,department:{id:1,name:"Payroll"},skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"}],da:new Date('12/31/2020')};

}
