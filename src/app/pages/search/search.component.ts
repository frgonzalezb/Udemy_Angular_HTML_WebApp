import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private route: ActivatedRoute,
              public _products: ProductsService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._products.searchProduct(params['txt']);
    });
  }

}
