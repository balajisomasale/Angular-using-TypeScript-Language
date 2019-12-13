import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QuickIncrComponent } from './quick-incr/quick-incr.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes: Routes = [
  {path:'view-emp',component:ViewEmpComponent},
  {path:'edit-employee',component:EditEmpComponent },
  {path:'quick-incr',component:QuickIncrComponent}
,{path:'quantity-selector',component:QuantitySelectorComponent},
{path:'edit-emp-template-driven',component:EditEmpTemplateDrivenComponent}
,{path:'edit-emp-reactive',component:EditEmpReactiveComponent}
,{path:'edit-emp-form-builder/:id',component:EditEmpFormBuilderComponent},
{path:'employee-list',component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ViewEmpComponent,EditEmpComponent,QuickIncrComponent,QuantitySelectorComponent,EditEmpTemplateDrivenComponent,EditEmpReactiveComponent,EditEmpFormBuilderComponent,EmployeeListComponent]