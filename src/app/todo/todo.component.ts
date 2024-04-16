import {Component} from '@angular/core';
import {Model} from "../model.model";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  displayAll: boolean = false;
  inputText: string = '';

  addItem() {
    if (this.inputText !== '') {
      this.model.items.push({description: this.inputText, action: false});
      this.inputText = '';
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
