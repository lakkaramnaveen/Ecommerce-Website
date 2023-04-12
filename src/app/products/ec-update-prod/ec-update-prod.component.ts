import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-ec-update-prod',
  templateUrl: './ec-update-prod.component.html',
  styleUrls: ['./ec-update-prod.component.css']
})
export class EcUpdateProdComponent {
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

  updateProduct(form: any){
    const updateProduct = {
      id: this.productId,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: form.value.product_isAvailable,
      color: form.value.product_color,
      reviews: form.value.product_reviews
    }
    console.log(form);
    this.productService.updateProductById(this.productId,updateProduct).subscribe(data =>{
      console.log(data);
      this.router.navigate(['products/all-products']);
    });
  }
}
