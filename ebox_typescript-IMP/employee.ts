import { Department} from './department'
import { Skill } from './skill'
var department1:Department={id:1,name:"Payroll"}



export interface Employee
{
id:String,name:String,salary:number,permanent:boolean,department:Department,skill:Skill[]



}