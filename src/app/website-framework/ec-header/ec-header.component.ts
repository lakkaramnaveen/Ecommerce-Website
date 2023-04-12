import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ec-header',
  templateUrl: './ec-header.component.html',
  styleUrls: ['./ec-header.component.css']
})
export class EcHeaderComponent {
  isDisabled = false;
  constructor(private router: Router){
  }
  ngOnInit():void{
    if(sessionStorage.getItem('admin')){
      this.isDisabled = false;
    }else{
      this.isDisabled = true;
    }
  }
  logout(){
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('admin')
    this.router.navigate(['/login'])
  }

  addProduct(){
    this.router.navigate(["/products/create-product"])
  }
}
