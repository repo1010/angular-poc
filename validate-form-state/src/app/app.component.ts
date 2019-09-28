import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Validate Form Data';
  topics = ['Angular', 'React','View'];
  hasTopicError= false;

  userModel =  new User('Vishal','abc@gmail.com','8372822389','default','morning',true);

  validateTopic(value){
  if(value === 'default'){
    this.hasTopicError = true;
  } else{
    this.hasTopicError = false;
  }
  }
}
