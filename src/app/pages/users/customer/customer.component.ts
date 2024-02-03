import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  URL: any = "https://localhost:7017/api/Customer/";
  CustomersData: any;
  cols = ['id',
    'name',
    'phoneNumber',
    'emailId',
    'address',
    'credit',
    'usedCredit',
    'password',
    'loginType',
    'isActive',
    'storeId'];
  public constructor(private http: HttpClient,) {


  }

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  ngAfterViewInit() {
    this.getCustomers();
    this.CustomersData.paginator = this.paginator;
    this.CustomersData.sort = this.sort;
   
  }
  // ngOnInit(): void {
  //   this.getCustomers();
  // }

  getCustomers() {
    debugger;
    this.http.get(this.URL).subscribe(
      (CustomerData) => {
        console.log(CustomerData)
        this.CustomersData = CustomerData;
      }
    )
  }

}
