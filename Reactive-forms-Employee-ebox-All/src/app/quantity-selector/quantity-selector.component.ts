import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent {
   x:number =0;
  str:boolean;
  rd:boolean=true;
  click()
  {
  
  this.str=true;
  
  }
  Add()
  {


    
  this.x=this.x+1;
  this.rd=false;
  }
  Sub()
  {

 this.x=this.x-1;
 if(this.x<=0)
 {
   this.rd=true;
 }

  }






    
}
