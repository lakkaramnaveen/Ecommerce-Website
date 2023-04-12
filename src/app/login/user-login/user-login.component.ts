import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  
  faLock = faLock;
  loginForm !: FormGroup;
  constructor(private activatedRoute : ActivatedRoute , private router : Router, private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit():void{
    this.loginForm = this.formBuilder.group({
      emailid:[''],
      pass:['']
    })
  }
  
  btnClick=  () => {
          this.router.navigateByUrl('/login/signup');
  };

  login(){
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.emailid && a.password === this.loginForm.value.pass
      });
      if(user){
        alert("Login successful");
        if(user.isAdmin){
          sessionStorage.setItem('admin','admin')
          console.log(user)
        }
        sessionStorage.setItem('login','login')
        this.loginForm.reset();
        this.router.navigate(['products/all-products']);
      }else{
        alert("User not found")
      }
    },err=>{
      alert("Something is fishy")
    })
  }
}
