import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/users-service';
import { PasswordValidator } from 'src/app/validators/password';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  checked: boolean = true;
  emailForm = new FormControl('', [Validators.required, Validators.email]);
  passwordForm = new FormControl('', [Validators.required, PasswordValidator.strong]);
  matcher = new MyErrorStateMatcher();

  formRegister = this.fb.group({
    email: this.emailForm,
    username: ['', Validators.required],
    password: this.passwordForm,
    confirmpassword: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private us: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    let dataRegister = this.formRegister.value;
    if (dataRegister.email || dataRegister.username || dataRegister.password || dataRegister.confirmpassword) {
      if (this.emailForm.invalid || this.passwordForm.invalid) {
        alert('Your input must be require!')
      } else {
        if (dataRegister.password !== dataRegister.confirmpassword) {
          alert('Your password not same')
        } else {
          this.us.registerUser(dataRegister)
            .subscribe(
              response => {
                this.formRegister.reset();
                this.router.navigate(['/']);
              },
              error => {
                console.log(error)
              }
            )
        }
      }
    } else {
      alert('Your input must be requireeeee!')
    }
  }

  changeValue(value: any) {
    this.checked = !value;
  }

}
