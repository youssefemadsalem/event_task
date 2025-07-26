import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private readonly _httpclient=inject(HttpClient)

  constructor() { }

GetAllProducts():Observable<any>{

 return this._httpclient.get("https://fakestoreapi.com/products")


}


GetspecProducts(id:string):Observable<any>{

 return this._httpclient.get(`https://fakestoreapi.com/products/${id}`)


}

}