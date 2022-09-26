import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeaturedComponent } from './components/products_/featured/featured.component';
import { ProductsComponent } from './components/products_/products/products.component';
import { ProductComponent } from './components/products_/product/product.component';
import { UpButtonComponent } from './components/up-button/up-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturedComponent,
    ProductsComponent,
    ProductComponent,
    UpButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
