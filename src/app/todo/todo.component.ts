import {Component} from '@angular/core';
import {Model} from "../model.model";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  displayAll: boolean = false;

  addItem(value: string) {
    if (value !== '') {
      this.model.items.push({description: value, action: false});
    } else {
      alert('Field cannot be empty');
    }
  }

  model = new Model();

  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }
}
