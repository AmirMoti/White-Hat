import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [];
  private productUpdated = new BehaviorSubject<Product[]>(this.products);
  private headers: HttpHeaders;


  constructor(private http: HttpClient) {}


  getProducts() {
    this.http.get<{ message: string, products: Product[] }>('http://localhost:3000/wh/products')
      .subscribe((responseData) => {
        this.products = responseData.products;
        this.productUpdated.next([...this.products]);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );
  }

  search(name:string) {
    this.http.post<{ message: string, products: Product[] }>('http://localhost:3000/wh/products', {name:name})
      .subscribe((responseData) => {
        this.products = responseData.products;
        this.productUpdated.next([...this.products]);
      }, error => {
        alert('Error' + ":" + error.message);
      }
      );
  }

  getProductUpdateListener() {
    return this.productUpdated.asObservable();
  }
}
