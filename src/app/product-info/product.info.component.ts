import { Component, Input } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'product-info',
  templateUrl: './product.info.component.html',
  styleUrls: ['./product.info.component.scss']
})
export class ProductInfoComponent {
  @Input() product: Product | null = null;
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
  getImagePath(prod: Product) {
    return `assets/images/${prod.image}`;
  }
}
