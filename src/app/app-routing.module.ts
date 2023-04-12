import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { PageNotFoundComponent } from './products/page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'', redirectTo:'login',pathMatch:'full'},
  { path: 'products',canActivate: [AuthService], loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
