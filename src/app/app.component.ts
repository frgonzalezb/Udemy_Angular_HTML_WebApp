import { Component } from '@angular/core';
import { PageInfoService } from './services/page-info.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';

  // Inyección de dependencias
  constructor(public _pageInfo: PageInfoService, 
              public productsService: ProductsService) {
    // ProductsService aquí para que los productos estén disponibles en 
    // toda la aplicación, en todo momento.
  }
}
