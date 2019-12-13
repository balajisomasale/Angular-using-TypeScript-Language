import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpComponent } from './view-emp.component';


describe('ViewEmpComponent', () => {
  let component: ViewEmpComponent;
  let fixture: ComponentFixture<ViewEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });



  // it(`should have as Department`, () => {
  //   const fixture = TestBed.createComponent(ViewEmpComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.Employee1.department.name).toEqual('Payroll');
  // });

});
