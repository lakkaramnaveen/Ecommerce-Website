import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-ec-create-prod',
  templateUrl: './ec-create-prod.component.html',
  styleUrls: ['./ec-create-prod.component.css']
})
export class EcCreateProdComponent {
  constructor(private productService : ProductsService, private router : Router) { }

  ngOnInit(): void {
  }
  addNewProduct(form: any){

    let newProduct = {
      id: 14,
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      description: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: 1,
      color: form.value.product_color,
      reviews: form.value.product_reviews
    }

    console.log(newProduct);

    this.productService.createProduct(newProduct).subscribe(data =>{
      console.log(data);
      this.router.navigate(['products/all-products']);
    });
  }
}
