import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Form';
  registrationForm =  new FormGroup({
    username : new FormControl('Vishal'),
    password: new FormControl(''),
    confirmPassword : new FormControl(''),
    address : new FormGroup({
      city : new FormControl(''),
      state : new FormControl(''),
      pincode : new FormControl('')
    })
  });

  loadCompleteApiData(){
    this.registrationForm.setValue(  {
      username : 'Vishal Kumar',
      password: 'vishal',
      confirmPassword : 'vishal',
      address : {
        city : 'Mumbai',
        state : 'Maharashtra',
        pincode : '400708'
      }
    });
  }

  loadPartialApiData(){
    this.registrationForm.patchValue(  {
      username : 'Vishal Kumar',
      password: 'vishal',
      confirmPassword : 'vishal'
    });
  }
}
