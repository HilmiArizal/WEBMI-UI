import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  dataTodo: any = [
    {
      name: 'Hilmi Arizal',
      date: 'Selasa',
      activity: 'Coding',
      description: 'Membuat design dashboard'
    }
  ];
  name = '';
  date = '';
  activity = '';
  description = '';

  constructor() { }

  ngOnInit(): void {
    // this.dataTodo;
  }

  addTodo(){
    let name = this.name;
    let date = this.date;
    let activity = this.activity;
    let description = this.description;
    let dataTodo = {name, date, activity, description};
    console.log(dataTodo);
  }

}
