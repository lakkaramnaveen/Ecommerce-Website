import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminService } from '../admin.service';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EcCreateProdComponent } from './ec-create-prod/ec-create-prod.component';
import { EcDelProdComponent } from './ec-del-prod/ec-del-prod.component';
import { EcUpdateProdComponent } from './ec-update-prod/ec-update-prod.component';
import { EcViewProdComponent } from './ec-view-prod/ec-view-prod.component';
import { EcViewallProdCatComponent } from './ec-viewall-prod-cat/ec-viewall-prod-cat.component';
import { EcViewallProdComponent } from './ec-viewall-prod/ec-viewall-prod.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, 
  children: [
  { path: 'all-products', component: EcViewallProdComponent, pathMatch:"full"},
  { path: 'create-product',  canActivate:[AdminService], component: EcCreateProdComponent },
  { path: 'delete-product/:id', component: EcDelProdComponent },
  { path: 'product/:id', component: EcViewProdComponent },
  { path: 'update-product/:id', component: EcUpdateProdComponent },
  { path: 'add-product/:id', component: AddToCartComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: 'category/:id', component: EcViewallProdCatComponent },
  { path: '**', component: PageNotFoundComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
