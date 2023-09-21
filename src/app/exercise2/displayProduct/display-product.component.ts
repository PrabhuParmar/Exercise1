import { Component, Input } from '@angular/core';
import { productInterface } from '../exercise2.component';
@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class StoreHtmlDataComponent {
  @Input() productData: productInterface | any;
  tableEmptyMessage: string = 'Table Empty';
};
