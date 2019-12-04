import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styles: []
})
export class SelectComponent implements OnInit {

  ngOnInit() {
  }

  
  people;
  selectedPeople;

  constructor() {
    this.people = [
      {name: 'John Jones', initial: 'JJ'},
      {name: 'Lebron James', initial: 'LJ'},
      {name: 'Dwayne Wade', initial: 'DW'},
      {name: 'John Paul Jones', initial: 'JPJ'},
      {name: 'Hannah Brown', initial: 'HB'},
      {name: 'Kobe Bryant', initial: 'KB'},
      {name: 'Tim Duncan', initial: 'TD'},
      {name: 'Reggie Miller', initial: 'RM'},
      {name: 'Steph Curry', initial: 'SC'},
      {name: 'Steve Nash', initial: 'SN'},
      {name: 'James Harden', initial: 'JH'}
    ];

  }

  onChange(e) {
    console.info(e.value);
  }
}