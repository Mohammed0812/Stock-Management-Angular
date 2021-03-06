import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname = "";
  pname = "";
  rname = "";
  fprice: any;
  fquant = 50;
  sales: any;
  received: any;
  hand:any;
  product: any = [
  ];
  Sales: any = [
  ];
  report: any = [
  ];
  pageName:any = true;
  pageName1:any;
  pageName2:any;
  pageName3:any;
  constructor() {
    let a = localStorage.getItem('product');
    if (a) {
      this.product = JSON.parse(a);
    }
    let b = localStorage.getItem('Sales');
    if (b) {
      this.Sales = JSON.parse(b);
    }
    let c = localStorage.getItem('report');
    if (c) {
      this.report = JSON.parse(c);
    }
  }
  f: any;
  addProduct() {
    this.f = {
      name: this.fname,
      price: this.fprice,
      quant: this.fquant,
    };
    this.product.push(this.f);
    localStorage.setItem('product', JSON.stringify(this.product));
  }
  delete(i: any) {
    this.product.splice(i, 1);
  }

  addSales() {
    let p = {
      name: this.pname,
      out: this.sales,
      in: this.fquant
    };
    this.Sales.push(p);
    localStorage.setItem('Sales', JSON.stringify(this.Sales));
  }

  addReport() {
    let r = {
     name: this.rname,
     Received: this.received,
     Hand:this.hand,
     Total: this.hand + this.received
   };
    this.report.push(r);
    localStorage.setItem('report', JSON.stringify(this.report));
  }
  page() {
    this.pageName1 = false;
    this.pageName2 = false;
    this.pageName3 = false;
  }
  page1() {
    this.pageName1 = true;
    this.pageName2 = false;
    this.pageName3 = false;
  }
  page2() {
    this.pageName2 = true;
    this.pageName1 = false;
    this.pageName3 = false;
  }
  page3() {
    this.pageName3 = true;
    this.pageName2 = false;
    this.pageName1 = false;
  }
}
