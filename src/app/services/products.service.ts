import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loading = true;
  products: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    /**
     * MÉTETE BIEN ESTO EN LA CABEZA!!!
     * 
     * En el código original (this.http.get()), se genera error porque, 
     * aparentemente, TypeScript estaba tratando de interpretar la respuesta 
     * como un objeto genérico, en lugar de como un objeto del tipo Product.
     * 
     * Para solucionar esto, había que especificar explícitamente el tipo de 
     * datos que esperas recibir en la respuesta utilizando el tipo 
     * Observable<Product> en lugar de Observable<Object>.
     * 
     * Es decir: this.http.get<Product>()
     *  */ 
    this.http.get<Product[]>('https://angular-html-65294-default-rtdb.firebaseio.com/products_idx.json')
      .subscribe((response: Product[]) => {
        console.log(response);

        setTimeout(() => {
          this.loading = false;
        }, 2000);

        this.products = response;
      });
  }
}
