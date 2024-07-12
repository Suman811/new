import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MyserviceService } from 'src/app/myservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  passwordVisible = false;


  constructor(
    private router: Router,
    private toastr: ToastrService,
    private service: MyserviceService,

  ) { }


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
  getControl(a: any) {
    return this.loginform.get(a);
  }
  saveform() {
    if (this.loginform.valid) {
      this.service.Validate(this.loginform.value).subscribe(res => {
        if (res.statusCode == 200) {
          localStorage.setItem('mytoken', 'token');
          this.router.navigate(['/user'])
          this.toastr.success(res.StatusCode, "login Succesful");
        }
        else {
          this.toastr.error(res.StatusCode);

        }
      });
    }
    else {
      this.toastr.error("Invalid Form");

    }
  }








}
