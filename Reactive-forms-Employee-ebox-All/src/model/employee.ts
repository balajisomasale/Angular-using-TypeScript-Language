import { Department } from '../app/department';
import { Skill } from '../app/skill';
var department1:Department={id:1,name:"Payroll"}
export interface Employee
{
id:String,name:String,salary:number,permanent:boolean,Department:Department,Skill:Skill[],dateOfBirth:Date;



}