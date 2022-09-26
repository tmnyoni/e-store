import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.type';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {
  product: Product | undefined;
  image: string | undefined;
  index = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.onGetProduct();
  }

  onGetProduct(): void {
    this.productService.getProduct().subscribe(
      (response) => {
        this.product = response;
        console.log(response)
      }
    );
  }

}
