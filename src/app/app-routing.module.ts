import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './dashboard/customer/customer.component';


const routes: Routes = [
  {
     path: 'customer', component: CustomerComponent 
      },
      
      {
       path: 'lazy', 
       loadChildren: './dashboard/lazy/lazy.module#LazyModule'
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
