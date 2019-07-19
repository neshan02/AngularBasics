import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';


const routes: Routes = [
  {path :'satff', component:StaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
