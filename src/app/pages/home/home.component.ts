import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  tokenStr = '';

  constructor(public router: Router) { 

  }

  ngOnInit(): void {
    let token = JSON.parse(localStorage.getItem("authToken") || '{}');
    if(token === ''){
      this.router.navigate(["/"]);
    }
  }

  getToken = () => {
    this.tokenStr = JSON.parse(localStorage.getItem("authToken") || '{}');

    let helper = new JwtHelperService().decodeToken(this.tokenStr);
    console.log(helper);
  }


  

}
