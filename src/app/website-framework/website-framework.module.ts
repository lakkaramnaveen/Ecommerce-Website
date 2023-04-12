import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcFooterComponent } from './ec-footer/ec-footer.component';
import { EcHeaderComponent } from './ec-header/ec-header.component';
import { EcSideComponent } from './ec-side/ec-side.component';



@NgModule({
  declarations: [
    EcFooterComponent,
       EcHeaderComponent,
       EcSideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EcFooterComponent,
       EcHeaderComponent,
       EcSideComponent
  ]
})
export class WebsiteFrameworkModule { }
