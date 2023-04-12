import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-ec-del-prod',
  templateUrl: './ec-del-prod.component.html',
  styleUrls: ['./ec-del-prod.component.css']
})
export class EcDelProdComponent {
  productId : any;
  productDetails : any;
  constructor(private activatedRoute : ActivatedRoute , private productService : ProductsService, private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productId = data['id'];

      this.productService.viewProductById(this.productId).subscribe(data =>{
        this.productDetails = data;
      });

    });
  }

  deleteProduct(){
    alert('want to delete for sure');
    this.productService.deleteProductById(this.productId).subscribe(data =>{
      console.log(data);
    });
    this.router.navigate(['products/all-products']);
  }
}
