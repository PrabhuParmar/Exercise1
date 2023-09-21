import { Component, EventEmitter, Output } from '@angular/core';
import { productInterface } from '../exercise2.component'

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class StoreItemDataComponent {
  itemName: string = '';
  itemDescription: string = '';
  itemPrice: number = 0;

  @Output() productData = new EventEmitter<productInterface>();

  // item Data Send To parent 
  submitProductData = () => {
    this.productData.emit({
      name: this.itemName,
      description: this.itemDescription,
      price: this.itemPrice,
    });
    this.itemName = '';
    this.itemDescription = '';
    this.itemPrice = 0;
  };
};
