import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import {Category} from '../website-framework/category';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient :HttpClient) { }

  getAllProducts(): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl);
  }

  getCategories(): Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoriesUrl);
  }

  createProduct(productBody: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/';
    return this.httpClient.post<any>(productUrl,productBody);
  }

  viewProductById(productId: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.get<Product>(productUrl);
  }

  updateProductById(productId: string, productBody: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.put<Product>(productUrl, productBody);
  }

  deleteProductById(productId: any){
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.delete<Product>(productUrl);
  }

  searchProductByCategory(categoryId: number): Observable<Product>{
    const productUrl = 'http://localhost:3000/products?categoryId='+categoryId;
    return this.httpClient.get<Product>(productUrl);
  }

  searchProductByDate(date: any): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/date='+date;
    return this.httpClient.get<Product>(productUrl);
  }
}
