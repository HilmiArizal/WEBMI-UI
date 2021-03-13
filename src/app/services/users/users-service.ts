import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: "root"
})

export class UserService {

    readonly ROOT_URL;
    api_Url: string = 'users'

    constructor(private http: HttpClient) {
        this.ROOT_URL = `http://localhost:2021`;
    }

    getUser() {
        return this.http.get(this.ROOT_URL);
    }

    registerUser(dataRegister: any) {
        return this.http.post(`${this.ROOT_URL}/${this.api_Url}/register`, dataRegister);
    }

    loginUser(dataLogin: any){
        return this.http.post(`${this.ROOT_URL}/${this.api_Url}/login`, dataLogin);
    }

}