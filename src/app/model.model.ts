import {TodoItem} from "./todo-item";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Jalil';
    this.items = [{
      description: 'Breakfast',
      action: true
    }, {
      description: 'Workout',
      action: true
    }, {
      description: 'Shopping',
      action: false
    }, {
      description: 'Shopping',
      action: true
    }, {
      description: 'Shopping',
      action: false
    }];
  }
}
