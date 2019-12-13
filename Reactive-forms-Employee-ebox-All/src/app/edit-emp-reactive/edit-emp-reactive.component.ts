import { Component} from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Department } from '../department';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/model/employee';


@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent {

 
  Employee1:Employee;

  department1: Department[];
empForm = new FormGroup({
    'name': new FormControl(this.Employee1.name, [Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
    'salary':new FormControl(this.Employee1.salary,[ Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
    'permanent':new FormControl(this.Employee1.permanent,[ Validators.required]),
    'select':new FormControl(this.Employee1.Department.name,[Validators.required])
  });
  get name()
   { return this.empForm.get('name'); }
   get salary()
   { return this.empForm.get('salary'); }
   get permanent()
   { return this.empForm.get('permanent'); }
   get select()
   { return this.empForm.get('select'); }

   
  onSubmit()
  {

console.log(this.empForm );




  }
  



  }
