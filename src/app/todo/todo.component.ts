import {Component} from '@angular/core';
import {Model} from "../model.model";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  message = "";

  /*addItem(input: any) {
    console.log(input.value);
  }*/

  addItem(value: string) {
    if (value !== '') {
      this.model.items.push({description: value, action: 'no'});
    } else {
      alert('Field cannot be empty');
    }
  }

  model = new Model();

  getName() {
    return this.model.name;
  }

  getItems() {
    return this.model.items;
  }
}
