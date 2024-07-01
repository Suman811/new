import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {




  constructor(private route: Router, private toastr : ToastrService) { }


  ngOninit() {
    const storedemail = localStorage.getItem('email') || '';
    const storedPassword = localStorage.getItem('password') || '';

    this.loginform.setValue({
      email: storedemail,
      password: storedPassword

    });
  }


  loginform = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    //password: new FormControl(" ", [Validators.required, Validators.pattern(('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$'))])
    password: new FormControl("", [Validators.required, Validators.pattern(('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'))])
  })

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
getControl(a:any){
  return this.loginform.get(a);
}
  saveform() {
    const a = this.loginform.value.email;
    const b = this.loginform.value.password;

    const storedEmail = localStorage.getItem('email') || '';
    const storedPassword = localStorage.getItem('password') || '';

    console.log(this.loginform.value);
    if (a == storedEmail && b == storedPassword) {
      alert("Login successful");
      localStorage.setItem("mytoken", "token");
      this.route.navigate(['/user']);
      this.toastr.success("login Succesful","Congratulations");
    }
    else {
      alert("Incorrect username or password");
    }
  }








}
