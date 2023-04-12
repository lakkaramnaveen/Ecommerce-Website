import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-ec-view-prod',
  templateUrl: './ec-view-prod.component.html',
  styleUrls: ['./ec-view-prod.component.css']
})
export class EcViewProdComponent {
  productID: any;
  productDetails : any;
  isDisabled = false;
  
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private router: Router){
    
  }

  ngOnInit():void{
    if(sessionStorage.getItem('admin')){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
    this.activatedRoute.params.subscribe(data => {
      this.productID = data['id'];
      console.log(this.productID);
    })
    this.productService.viewProductById(this.productID).subscribe(productData => {
      this.productDetails = productData;
      console.log(this.productDetails.productName);
    });
  }
  update(){
    this.router.navigate(["/products/update-product/"+this.productID])
  }
  delete(){
    this.router.navigate(["/products/delete-product/"+this.productID])
  }
  addToCart(){
    this.router.navigate(["/products/add-product/"+this.productID])
  }

}
