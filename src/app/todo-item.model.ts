export class TodoItem {
  /*description: string;
  action: string;

  constructor(description: string, action: string) {
    this.description = description;
    this.action = action;
  }*/

  constructor(public description: string, public action: string) {
    this.description = description;
    this.action = action;
  }
}
