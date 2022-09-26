import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.type';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../interfaces/response-data.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ResponseData> {
    return this.http.get<ResponseData>(`${this.apiUrl}/products`);
  };

  getProduct(): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/1`);
  };

  searchProducts(query: string): Observable<Product[]> {
    // let params = new HttpParams({ fromString: `q=${query}` });
    return this.http.get<Product[]>(`${this.apiUrl}/products/search?q=${query}`);
  }
}
