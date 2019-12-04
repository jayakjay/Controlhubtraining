import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyoneComponent } from './lazyone.component';
import { LazytwoComponent } from './lazytwo.component';


const routes: Routes = [
  
  { path: '', component:LazyoneComponent  },
    { path: 'lazytwo', component: LazytwoComponent }
   
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [LazyoneComponent,LazytwoComponent],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
