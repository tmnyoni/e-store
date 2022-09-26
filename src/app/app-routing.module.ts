import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductViewComponent } from './components/products_/product-view/product-view.component';
import { ProductsComponent } from './components/products_/products.component';

const routes: Routes = [
  { path: "", component: ProductsComponent },
  { path: "products/1", component: ProductViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
