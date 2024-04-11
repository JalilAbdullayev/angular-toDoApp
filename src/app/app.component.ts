import {Component} from '@angular/core';

@Component({
  selector: 'app',
  // templateUrl: './app.component.html',
  template: `<h1>app component</h1>
  <h2>{{ title }}</h2>
  <h2>{{ getTitle() }}</h2>
  <p>
    {{ toDoItem.description }}
    {{ toDoItem.action }}
  </p>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to Do App';
  toDoItem = {
    description: 'breakfast',
    action: true
  }

  getTitle() {
    return this.title;
  }
}
