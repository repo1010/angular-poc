import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bind Form Data';
  topics = ['Angular', 'React','View'];

  userModel =  new User('Vishal','abc@gmail.com','83728223','','morning',true);
}
