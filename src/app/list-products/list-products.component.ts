import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products:Array<Product> = [] 

  constructor(private productService:ProductService) {

   }

  ngOnInit(): void {

    this.products =  this.productService.products
  }

}
