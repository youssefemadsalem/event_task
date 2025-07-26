import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/products/product.service';
import { IProduct } from '../../core/interfaces/products/iproduct';

@Component({
  selector: 'app-productdetail',
  imports: [],
  templateUrl: './productdetail.component.html',
  styleUrl: './productdetail.component.scss',
})
export class ProductdetailComponent implements OnInit {
  constructor(private _productservice: ProductService) {}
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  productid!: string;
  productdetail: IProduct = {} as IProduct;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        this.productid = param.get('id')!;
        console.log(this.productid)
      },
    });

    this._productservice.GetspecProducts(this.productid).subscribe({
      next: (res) => {
        this.productdetail = res;
        console.log(res)
      },

            error: (err) => {
        console.log(err)
      },
    });
  }
}
