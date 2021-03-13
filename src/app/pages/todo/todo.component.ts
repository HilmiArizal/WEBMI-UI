import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos/todos-service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  dataTodo: any = [];
  selectedId = null;
  name = '';
  date = '';
  activity = '';
  description = '';

  nameEdit = '';
  dateEdit= '';
  activityEdit = '';
  descriptionEdit = '';

  constructor(private ts: TodosService) { }

  ngOnInit(): void {
    this.getAllTodo();
  }

  getAllTodo() {
    this.ts.getAllTodo()
      .subscribe(
        response => {
          this.dataTodo = response;
        }
      )
  }

  addTodo() {
    let name = this.name;
    let date = this.date;
    let activity = this.activity;
    let description = this.description;
    let dataTodos = { name, date, activity, description };
    this.ts.addTodo(dataTodos)
      .subscribe(
        response => {
          this.getAllTodo()
        }
      )
  }


  deleteTodo(idtodo: number) {
    this.ts.deleteTodo(idtodo).subscribe(response => {
      this.getAllTodo()
    })
  }

  editTodo(idtodo: any) {
    this.selectedId = idtodo;
    console.log(this.selectedId)
  }

  cancelEdit() {
    this.selectedId = null;
  }

  confirmEdit(idtodo: any) {
    let name = this.nameEdit;
    let date = this.dateEdit;
    let activity = this.activityEdit;
    let description = this.descriptionEdit;
    let dataTodos = { name, date, activity, description };
    this.ts.editTodo(dataTodos, idtodo)
      .subscribe(
        response => {
          this.getAllTodo();
          this.selectedId = null;
        }
      )
  }
}
