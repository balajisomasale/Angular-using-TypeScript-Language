"use strict";
exports.__esModule = true;
var EmployeeTest = /** @class */ (function () {
    function EmployeeTest(id, name, salary, permanent, department, skill) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.permanent = permanent;
        this.department = department;
        this.skill = skill;
    }
    EmployeeTest.prototype.display = function () {
        console.log("id :" + this.id);
        console.log("name :" + this.name);
        console.log("salary :" + this.salary);
        console.log("permanent :" + this.permanent);
        console.log("department id :" + this.department.id);
        console.log("department name :" + this.department.name);
        var i;
        for (i = 0; i < this.skill.length; i++) {
            console.log("Skill[" + (i) + "]:" + this.skill[i].id + ", " + this.skill[i].name);
        }
    };
    return EmployeeTest;
}());
exports.EmployeeTest = EmployeeTest;
var Employee2 = new EmployeeTest("EM003", "John", 10000, true, { id: 1, name: "Payroll" }, [{ id: 1, name: "HTML" }, { id: 2, name: "CSS" }, { id: 3, name: "Javascript" }]);
Employee2.display();
