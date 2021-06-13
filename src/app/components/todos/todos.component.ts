import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: false,
      }
    ]
  }

  toggleDone(id) :void {
    //have to use void (not :number) here because you cant return a value from a map
    //out of a function, wish the tutorial would of mentioned that
    this.todos.map((value, index) => {
      if(index === id) value.completed = !value.completed;

      return value
    })
  }


  deleteTodo(id:number){
    this.todos = this.todos.filter((value, index) => index !== id )
  }


  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    })

    //make sure to reset the inputTodo to an empty string
    this.inputTodo = "";
  }
}
