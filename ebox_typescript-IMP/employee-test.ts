
import { Employee } from './employee';
import { Department } from './department';
import { Skill } from './skill';




export class EmployeeTest implements Employee
{
   constructor( public id:String,public name:String,public salary:number,public permanent:boolean,public department:Department,public skill:Skill[]
   ){ }
   display():void
{
console.log("id :"+this.id);

console.log("name :"+this.name);
console.log("salary :"+this.salary);
console.log("permanent :"+this.permanent);

console.log("department id :"+this.department.id);
console.log("department name :"+this.department.name);
var i
for (i=0;i<this.skill.length;i++)
{

    console.log("Skill[" +(i)+"]:" +this.skill[i].id+", "+this.skill[i].name);
}
}  


}
let Employee2=new EmployeeTest("EM003","John",10000,true,{id:1,name:"Payroll"},[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]);
Employee2.display();