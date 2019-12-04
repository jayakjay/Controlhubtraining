import { Component } from '@angular/core';
import { CustomerdaService } from '../customerda.service'

@Component({
  selector: 'example-data-table-default',
  templateUrl: './datatable.component.html',

  styles: []
})
export class DataTableDefaultComponent {

  constructor(public service: CustomerdaService) { }
  tableData;
  ngOnInit() {
    this.getCData();
  }

  columns = [
    { header: 'Customer Name', field: 'customerName' },
    { header: 'Services', field: 'services' },
    { header: 'Account Status', field: 'updated' },
    { header: 'Total Licenses', field: 'id' },
    { header: 'Notes', field: 'Notes' }
  ];

  people = [];

  getCData(): void {
    this.service.getCustomerData().subscribe(data => {
      console.log(data)
      this.tableData = data;
      for (let i in this.tableData.organizations) {
        let obj = {
          customerName: this.tableData.organizations[i].customerName,
          services: this.tableData.organizations[i].offers,
          accountStatus: this.tableData.organizations[i].provStatus,
          totalLicenses: this.tableData.organizations[i].totalLicenses,
          Notes: this.tableData.organizations[i].Notes
        }
        this.people.push(obj);
      }

    });
  }

}