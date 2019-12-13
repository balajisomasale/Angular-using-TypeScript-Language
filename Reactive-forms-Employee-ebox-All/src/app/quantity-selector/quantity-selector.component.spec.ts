import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantitySelectorComponent } from './quantity-selector.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
describe('QuantitySelectorComponent', () => {
  let component: QuantitySelectorComponent;
  let fixture: ComponentFixture<QuantitySelectorComponent>;
  let debugElement: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantitySelectorComponent ],imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantitySelectorComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it(`should have click event`, () => {
    let clickMeButton = debugElement.nativeElement.querySelector('#clickMe2');
clickMeButton.click();

    fixture.detectChanges();
    
    expect(debugElement.nativeElement.querySelector('#test').value).toContain('1');
  });
});
