import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { Category } from '../category';

@Component({
  selector: 'app-ec-side',
  templateUrl: './ec-side.component.html',
  styleUrls: ['./ec-side.component.css']
})
export class EcSideComponent{

  categoryList: any;
  constructor(private productService: ProductsService){
  }

  ngOnInit(): void{
    this.productService.getCategories().subscribe(data => {
      this.categoryList = data;
    })
  }
}
