import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { EcCreateProdComponent } from './ec-create-prod/ec-create-prod.component';
import { EcViewallProdComponent } from './ec-viewall-prod/ec-viewall-prod.component';
import { EcViewProdComponent } from './ec-view-prod/ec-view-prod.component';
import { EcDelProdComponent } from './ec-del-prod/ec-del-prod.component';
import { EcUpdateProdComponent } from './ec-update-prod/ec-update-prod.component';
import { EcViewallProdCatComponent } from './ec-viewall-prod-cat/ec-viewall-prod-cat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WebsiteFrameworkModule } from '../website-framework/website-framework.module';

@NgModule({
  declarations: [
    ProductsComponent,
    EcCreateProdComponent,
    EcViewallProdComponent,
    EcViewProdComponent,
    EcDelProdComponent,
    EcUpdateProdComponent,
    EcViewallProdCatComponent,
    PageNotFoundComponent,
    AddToCartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    WebsiteFrameworkModule
  ]
})
export class ProductsModule { }
