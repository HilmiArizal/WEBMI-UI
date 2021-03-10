import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  formLogin = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onLogin(){
    let dataLogin = this.formLogin.value;
    console.log(dataLogin);

  }

}
