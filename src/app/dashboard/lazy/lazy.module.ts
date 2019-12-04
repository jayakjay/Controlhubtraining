import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyoneComponent } from './lazyone.component';
import { LazytwoComponent } from './lazytwo.component';


@NgModule({
  declarations: [LazyoneComponent, LazytwoComponent],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
