import { Component, OnInit } from '@angular/core';
import { Staff } from "../staff";
import { Location } from '@angular/common';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  
  clg=['AAMEC' ,
       'AVC' ,
       'PITS' ,
       'KINGS'];

       gen=['Male','Female'];
  model = new Staff(0,'','',this.clg[0],this.gen[0]);
  submitted = false;
  
  // newStaff() 
  // {
  //   this.model = new Staff(42, '', '');
  // }
  
  
  onSubmit()
  {
    this.submitted=true;
  }
  

  get diagnostic()
  {
    return JSON.stringify(this.model);
  }
 
  constructor(private location : Location) 
  {

  }

  ngOnInit() 
  {
   
  }

  goBack(): void 
   {
    this.location.back;
   }


}
