import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


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
  matcher = new MyErrorStateMatcher();

  formRegister = this.fb.group({
    email: this.emailForm,
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required]
  })
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onRegister(){
    let dataRegister = this.formRegister.value;
    console.log(dataRegister);
  }

  changeValue(value: any){
    this.checked = !value;
  }

}
