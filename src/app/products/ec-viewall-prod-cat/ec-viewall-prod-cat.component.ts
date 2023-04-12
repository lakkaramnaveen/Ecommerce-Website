import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-ec-viewall-prod-cat',
  templateUrl: './ec-viewall-prod-cat.component.html',
  styleUrls: ['./ec-viewall-prod-cat.component.css']
})
export class EcViewallProdCatComponent {

  searchCategory: any;
  productList: any;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService){}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(data=>{
      this.searchCategory = data['id'];

      this.productService.searchProductByCategory(this.searchCategory).subscribe(categoryData => {
        this.productList = categoryData;
      })
    }); 
  }
  
}
