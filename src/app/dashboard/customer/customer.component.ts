import { Component, OnInit } from '@angular/core';
import { CustomerdaService} from '../customerda.service'



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  Titlename:string ='Customers'
  
  constructor(public service:CustomerdaService) { }

  ngOnInit() {
    
  }


}
