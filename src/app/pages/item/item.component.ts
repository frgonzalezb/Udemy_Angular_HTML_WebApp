import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductDescription } from '../../interfaces/product-description.interface'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  id: string = '';
  product: ProductDescription = {};

  constructor(private route: ActivatedRoute,
              public _product: ProductsService) {}

  ngOnInit() {
    this.route.params.subscribe(parameters => {
      console.log(parameters); // dbg

      this._product.getProduct(parameters['id'])
        .subscribe((product: ProductDescription) => {
          console.log(product); // dbg
          this.id = parameters['id'];
          this.product = product;
      });
    });
  }
}
