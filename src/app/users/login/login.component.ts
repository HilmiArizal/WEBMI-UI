import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/users-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  warningLogin = '';
  loadingLogin = true;
  successLogin = '';

  formLogin = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })


  constructor(private fb: FormBuilder, private us: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    let dataLogin = this.formLogin.value;
    this.us.loginUser(dataLogin)
      .subscribe(
        response => {
          setTimeout(() => {
            this.loadingLogin = true;
            this.successLogin = "Success";
          }, 2000);
          setTimeout(() => {
            this.successLogin = "";
          }, 3000);
          this.warningLogin = "";
          this.loadingLogin = false;
          this.formLogin.reset();
          this.router.navigate(['/user/home']);
        },
        error => {
          this.warningLogin = error.error;
        }
      )
  }

}
