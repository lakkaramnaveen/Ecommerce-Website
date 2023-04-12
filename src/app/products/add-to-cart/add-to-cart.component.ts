import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  productID: any;
  productDetails : any;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private router: Router){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(data => {
      this.productID = data['id'];
      console.log(this.productID);
    })
    this.productService.viewProductById(this.productID).subscribe(productData => {
      this.productDetails = productData;
      console.log(this.productDetails.productName);
    });
  }
}
