import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface'
import { ProductDescription } from '../interfaces/product-description.interface';
import { resolve } from 'path';
import { rejects } from 'assert';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loading = true;
  products: Product[] = [];
  productDescription: ProductDescription = {};
  filteredProducts: Product[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    return new Promise<void>((resolve, reject) => {
      /**
       * NOTA:
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
      this.http.get<Product[]>(environment.urlApi + 'products_idx.json')
        .subscribe((response: Product[]) => {
          this.loading = false;
          this.products = response;
          resolve();
      });
    });
  }

  getProduct(id: string) {
    return this.http.get<ProductDescription>(environment.urlApi + `products/${id}.json`);
  }

  searchProduct(txt: string) {
    if (this.products.length === 0) {
      // Cargar productos y luego aplicar filtro
      this.loadProducts().then(() => {
        this.filterProducts(txt);
      });
    } else {
      // Aplicar filtro
      this.filterProducts(txt);
    }
  }

  private filterProducts(txt: string) {
    this.filteredProducts = [];

    txt = txt.toLowerCase();

    this.products.forEach(product => {
      const tituloLowerCase = product.titulo.toLowerCase();

      if (tituloLowerCase.indexOf(txt) >= 0 || product.categoria.indexOf(txt) >= 0) {
        this.filteredProducts.push(product);
      }
    });
  }
}
