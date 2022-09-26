import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
