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
}
