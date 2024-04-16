import {Component} from '@angular/core';
import {Model} from "../model.model";
import {TodoItem} from "../todo-item";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  displayAll: boolean = false;
  inputText: string = '';

  constructor() {
    this.model.items = this.getItemsFromLS();
  }

  addItem() {
    if (this.inputText !== '') {
      let data = {description: this.inputText, action: false};
      this.model.items.push(data);
      let items = this.getItemsFromLS();
      items.push(data);
      localStorage.setItem("items", JSON.stringify(items));

      this.inputText = '';
    } else {
      alert('Field cannot be empty');
    }
  }

  getItemsFromLS() {
    let items: TodoItem[] = [];
    let value = localStorage.getItem("items");
    if (value != null) {
      items = JSON.parse(value);
    }
    return items;
  }

  onActionChanged(item: TodoItem) {
    let items = this.getItemsFromLS();
    localStorage.clear();
    items.forEach(i => {
      if (i.description == item.description) {
        i.action = item.action;
      }
    })
    localStorage.setItem("items", JSON.stringify(items));
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

  displayCount() {
    return this.model.items.filter(item => item.action).length;
  }

  getBtnClasses() {
    return {
      'disabled': this.inputText.length == 0,
      'btn-outline-secondary': this.inputText.length == 0,
      'btn-outline-primary': this.inputText.length > 0
    }
  }
}
