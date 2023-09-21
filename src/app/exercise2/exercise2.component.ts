import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})

export class Exercise2Component {
  @Input() productData: productInterface = {};
  productItem: productInterface[] = [];
  id: number = 0;

  productDataAdded = (productData: productInterface) => {
    this.id = this.productItem.length + 1;
    // data push in array of Object 
    this.productItem.push({
      id: this.id,
      name: productData.name,
      description: productData.description,
      price: productData.price,
    });
  };
};

export interface productInterface {
  id?: number;
  name?: string;
  description?: string;
  price?: number | string;
};