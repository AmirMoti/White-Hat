import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Subscription } from 'rxjs';
import { ProductService } from '../productservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  private ourProducts: Product[] = [];
  private productSub: Subscription;
  constructor(private producrService: ProductService, private router: Router) { }

  ngOnInit() {
    this.producrService.getProducts();
    this.productSub = this.producrService.getProductUpdateListener().subscribe((productData: Product[]) => {
      this.ourProducts = productData;
    });
  }
  onSearch(search: string) {
    if (search === "") {
      alert("Null Search");
    }
    else {
      this.producrService.search(search);
    }
  }
  onHome() {
    this.router.navigate(['/home-page']);
  }

}
