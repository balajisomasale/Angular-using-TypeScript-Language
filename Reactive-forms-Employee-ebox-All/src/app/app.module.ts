import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QuickIncrComponent } from './quick-incr/quick-incr.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpFormBuilderComponent } from './edit-emp-form-builder/edit-emp-form-builder.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewEmpComponent,
    EditEmpComponent,
    QuickIncrComponent,
    QuantitySelectorComponent,
    EditEmpTemplateDrivenComponent,
    EditEmpReactiveComponent,
    EditEmpFormBuilderComponent,
 
    EmployeeListComponent,
 
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
