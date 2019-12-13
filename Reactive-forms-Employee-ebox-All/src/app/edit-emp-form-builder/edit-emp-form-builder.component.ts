import { Component, OnInit} from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Department } from '../department';
import { Skill } from '../skill';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/model/employee';

@Component({
  selector: 'app-edit-emp-form-builder',
  templateUrl: './edit-emp-form-builder.component.html',
  styleUrls: ['./edit-emp-form-builder.component.css']
})
export class EditEmpFormBuilderComponent implements OnInit{

constructor(private formBuilder:FormBuilder,private route :ActivatedRoute,private empservice:EmployeeService){}
  empForm:any;
  Employee1:Employee={id:null,name:"John",salary:10000,permanent:false,Department:{id:1,name:"Payroll"},Skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"}],dateOfBirth:new Date('12/31/2020')};
  bool:boolean=false;
  department1: Department[];
  get name()   { return this.empForm.get('name'); }
   get salary()   { return this.empForm.get('salary'); }
   get permanent()   { return this.empForm.get('permanent'); }
  //  get select()   { return this.empForm.get('select'); }
   
  //  get skill()
  //  { return this.empForm.get('skill') as FormArray; }
  // AddSkill() {
  //   this.skill.push(this.emp.control(''));
  // }

ngOnInit(){
  const Id =this.route.snapshot.paramMap.get('id');
  this.empservice.getEmployee(+Id).subscribe(data=>{this.Employee1=data
    console.log(this.Employee1);
    this.bool=true;
    console.log(this.bool)
    this.empForm=this.formBuilder.group({
      name:[this.Employee1.name],
      salary:[this.Employee1.salary],
      permanent:[this.Employee1.permanent],
      // select:[this.Employee1.Department.id]
     
     // skill:this.emp.array([this.emp.control('')])
     
        });
  })
    this.empservice.getAllDepartment().subscribe(data=>this.department1=data)
}

// mod($event){



// this.Employee1.Department.id=$event.target.value
// this.department1.forEach(data =>{if(data.id==$event.target.value)
// {

// this.Employee1.Department.name=data.name
// }
// })


// }



onSubmit()
{
this.Employee1.name=this.empForm.value['name']
this.Employee1.salary=this.empForm.value['salary']
this.Employee1.permanent=this.empForm.value['permanent']



console.log(this.Employee1 );

this.empservice.updateEmployee(this.Employee1,+this.Employee1.id).subscribe()
}

}
