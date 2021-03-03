import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fname = "";
  fprice = 0;
  fquant = 0;
  fpurchase= 0;
  freceived = 0;
  product: any = [
  ];
  purchase: any = [
  ];
  report: any = [

  ];
  constructor() {
    let a = localStorage.getItem('product');
    if (a) {
      this.product = JSON.parse(a);
    }
    let b = localStorage.getItem('purchase');
    if (b) {
      this.purchase = JSON.parse(b);
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
      name: this.fname,
      out: this.fpurchase
    };
    this.purchase.push(p);
    localStorage.setItem('purchase', JSON.stringify(this.purchase));
  }

  addReport() {
    let r = {
      name: this.fname,
      received: this.freceived
    };
    this.report.push(r);
    localStorage.setItem('report', JSON.stringify(this.report));
  }
}
