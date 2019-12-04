import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {SidebarNavItemComponent, SideBarComponent,SidebarNavComponent, SideBarBodyComponent,SidebarHeaderComponent, SidebarFooterComponent, DataTableModule,InputModule, SelectModule} from '@momentum-ui/angular';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { DataTableDefaultComponent } from './dashboard/datatable/datatable.component';
import { SubheaderComponent } from './dashboard/subheader/subheader.component';
import { InputholderComponent } from './dashboard/inputholder/inputholder.component';
import { SidefooterComponent } from './dashboard/sidefooter/sidefooter.component';
import { SelectComponent } from './dashboard/select/select.component';
import { CustomerdaService } from './dashboard/customerda.service';
import { ChangetextDirective } from './dashboard/changetext.directive';
import { Sidebar1Component } from './dashboard/sidebar1/sidebar1.component';






@NgModule({
  declarations: [
    AppComponent,
    SidebarNavItemComponent,
    SideBarComponent,
    SidebarNavComponent,
    SideBarBodyComponent,
    DashboardComponent,
    CustomerComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarFooterComponent,
    DataTableDefaultComponent,
    SubheaderComponent,
    InputholderComponent,
    SidefooterComponent,
    SelectComponent,
    ChangetextDirective,
    Sidebar1Component,
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    InputModule,
    SelectModule,
    HttpClientModule
    ],
  providers: [CustomerdaService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
