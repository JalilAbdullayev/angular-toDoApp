import {TodoItem} from "./todo-item";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Jalil';
    this.items = [];
  }
}
