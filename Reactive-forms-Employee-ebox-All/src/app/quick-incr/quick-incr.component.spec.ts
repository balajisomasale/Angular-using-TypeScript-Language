import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickIncrComponent } from './quick-incr.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
describe('QuickIncrComponent', () => {
  let component: QuickIncrComponent;
  let fixture: ComponentFixture<QuickIncrComponent>;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickIncrComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickIncrComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have click event`, () => {
    let clickMeButton = debugElement.nativeElement.querySelector('#clickMe');
clickMeButton.click();

    fixture.detectChanges();
    
    expect(debugElement.nativeElement.querySelector('#simpleClick').textContent).toEqual('Click me button clicked');
  });


});
