import { Department} from './department'
import { Skill } from './skill'




export interface Employee
{
id:String,name:String,salary:number,permanent:boolean,department:Department,skill:Skill[],da:Date;



}