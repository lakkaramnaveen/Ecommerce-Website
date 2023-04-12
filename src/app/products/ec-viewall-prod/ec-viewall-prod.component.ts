import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-ec-viewall-prod',
  templateUrl: './ec-viewall-prod.component.html',
  styleUrls: ['./ec-viewall-prod.component.css']
})
export class EcViewallProdComponent {
  productList: any; //Product
  constructor(private productService : ProductsService){}
  ngOnInit(): void{
    this.productService.getAllProducts().subscribe(data => {
      this.productList = data;
    })
  }

}
