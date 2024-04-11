import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styles: [`p {
    color: red;
  }`]
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
