import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onGetProducts();
  }

  onGetProducts(): void {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response.products;
      }
    );
  }

}
