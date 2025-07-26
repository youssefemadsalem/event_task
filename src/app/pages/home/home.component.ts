import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/products/product.service';
import { IProduct } from '../../core/interfaces/products/iproduct';
import { Subscription } from 'rxjs';
import { SearchPipe } from '../../pipes/search/search.pipe';
import{FormsModule}from'@angular/forms'
import { RouterLink } from '@angular/router';
import { SortByPricePipe } from '../../pipes/sort/sort-by-price.pipe';

@Component({
  selector: 'app-home',
  imports: [SearchPipe,FormsModule,RouterLink ,SortByPricePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit ,OnDestroy{
searchvalue:string=''
sortorder:'asc' | 'desc' = 'asc'
productsdata!:IProduct[]
productsub!:Subscription

constructor(private _productservice:ProductService){}
  
  ngOnInit(): void {
  this.productsub =  this._productservice.GetAllProducts().subscribe({
next:(res)=>{
this.productsdata = res

},
error:(err)=>{
  
},
    })
  }
ngOnDestroy(): void {
  this.productsub?.unsubscribe()
}

}
