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
  fprice = 0;
  fquant = 50;
  purchase= 0;
  freceived = 0;
  product: any = [
  ];
  Purchase: any = [
  ];
  report: any = [
  ];
  constructor() {
    let a = localStorage.getItem('product');
    if (a) {
      this.product = JSON.parse(a);
    }
    let b = localStorage.getItem('Purchase');
    if (b) {
      this.Purchase = JSON.parse(b);
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

  addPurchase() {
    let p = {
      name: this.pname,
      out: this.purchase,
      in: this.fquant
    };
    this.Purchase.push(p);
    localStorage.setItem('Purchase', JSON.stringify(this.Purchase));
  }

  addReport() {
    let r = {
      name: this.rname,
      received: this.freceived
    };
    this.report.push(r);
    localStorage.setItem('report', JSON.stringify(this.report));
  }
}
