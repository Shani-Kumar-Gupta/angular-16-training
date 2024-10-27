import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  name: string = 'Angular';
  productDetails: {
    productName: string;
    productPrice: number;
    productColor: string;
    productDiscount: number;
    inStock: number;
    pImage: string;
  } = {
    productName: 'Iphone 15',
    productPrice: 999,
    productColor: 'Matte Black',
    productDiscount: 8.5,
    inStock: 10,
    pImage: '/assets/images/iphone.png',
  };

  getDiscountedPrice(): number {
    return (
      this.productDetails.productPrice -
      (this.productDetails.productPrice * this.productDetails.productDiscount) /
        100
    );
  }
}
