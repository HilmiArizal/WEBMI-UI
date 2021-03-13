import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root"
})

export class TodosService{

    readonly ROOT_URL;
    apiUrl: string = 'todos';

    constructor(private http: HttpClient){
        this.ROOT_URL = `http://localhost:2021`;
    }

    getAllTodo(){
        return this.http.get(`${this.ROOT_URL}/${this.apiUrl}/getAllTodo`)
    }

    addTodo(dataTodo: any){
        return this.http.post(`${this.ROOT_URL}/${this.apiUrl}/addTodo`, dataTodo)
    }

    deleteTodo(idtodo: number){
        return this.http.delete(`${this.ROOT_URL}/${this.apiUrl}/deleteTodo?idtodo=${idtodo}`)
    }

    editTodo(dataTodo: any, idtodo: number){
        return this.http.patch(`${this.ROOT_URL}/${this.apiUrl}/editTodo?idtodo=${idtodo}`, dataTodo)
    }

}