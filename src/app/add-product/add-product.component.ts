import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

   productName:string=""
   price:number=0

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }


  addProduct(){
    console.log("Product Name = ",this.productName);
    console.log("Price = ",this.price);
    let product:Product = {productName:this.productName,price:this.price} 
    this.productService.products.push(product);
  }
}
