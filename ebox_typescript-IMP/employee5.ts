
import { Employee } from './employee';


var Employee1:Employee={id:"EM003",name:"John",salary:10000,permanent:true,department:{id:1,name:"Payroll"},skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"Javascript"}]};




console.log("id :"+Employee1.id);

console.log("name :"+Employee1.name);
console.log("salary :"+Employee1.salary);
console.log("permanent :"+Employee1.permanent);



console.log("department id :"+Employee1.department.id);
console.log("department name :"+Employee1.department.name);

for (let i=0;i<Employee1.skill.length;i++)
{

    console.log("Skill [" +(i)+"]:" +Employee1.skill[i].id+", "+Employee1.skill[i].name);
}
