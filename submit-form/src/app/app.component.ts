import { Component } from '@angular/core';
import { User } from './user';
import {RegistrationService} from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form Submit';
  topics = ['Angular', 'React','View'];
  hasTopicError= false;
  submitted = false;
  userModel =  new User('Vishal','abc@gmail.com','8372822389','default','morning',true);

  constructor(private service : RegistrationService){

  }

  validateTopic(value){
  if(value === 'default'){
    this.hasTopicError = true;
  } else{
    this.hasTopicError = false;
  }
  }

  onSubmit(value){
      console.log(value);
      this.service.submitForm(value).subscribe(data => console.log('success', data),
      error => console.log('error ', error));
      this.submitted = true;
  }
}
