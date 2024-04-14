import {Component} from '@angular/core';
import {TodoItem} from "../todo-item";
import {Model} from "../model.model";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  model = new Model();

  getName() {
    return this.model.name;
  }

  getItems() {
    return this.model.items;
  }
}
