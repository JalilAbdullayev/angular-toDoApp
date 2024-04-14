import {TodoItem} from "./todo-item";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Jalil';
    this.items = [{
      description: 'Breakfast',
      action: 'yes'
    }, {
      description: 'Workout',
      action: 'yes'
    }, {
      description: 'Shopping',
      action: 'no'
    }, {
      description: 'Shopping',
      action: 'yes'
    }, {
      description: 'Shopping',
      action: 'no'
    }];
  }
}
