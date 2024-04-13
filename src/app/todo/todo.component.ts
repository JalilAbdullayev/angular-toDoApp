import {Component} from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  private name = 'Jalil';
  items = [{
    id: 1,
    description: 'Breakfast',
    action: 'yes'
  }, {
    id: 2,
    description: 'Workout',
    action: 'yes'
  }, {
    id: 3,
    description: 'Shopping',
    action: 'no'
  }]

  getName() {
    return this.name;
  }
}
