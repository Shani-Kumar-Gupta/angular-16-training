import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productName: string = 'Iphone 15';
  productPrice: number = 999;
  productColor: string = 'Matte Black';
  productDiscount: number = 8.5;
  inStock: number = 10;

  getDiscountedPrice(): number {
    return this.productPrice - (this.productPrice * this.productDiscount) / 100;
  }
}
