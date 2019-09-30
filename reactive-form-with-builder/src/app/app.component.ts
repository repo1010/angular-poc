import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './user-name.validator';
import { PasswordValidator } from 'password.validator';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  registrationForm : FormGroup;
  title = 'Reactive Form With Form Builder';
  constructor(private fb : FormBuilder, private regService : RegistrationService){  }

  ngOnInit() {
    this.registrationForm =  this.fb.group({
      username : ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/) ]],
      email : [''],
      subscribe : [''],
      password: [''],
      confirmPassword : [''],
      address : this.fb.group({
        city : [''],
        state : [''],
        pincode : ['']
      }),
      alternateEmails : this.fb.array([])
    }, {validator: [PasswordValidator]});
  
    this.registrationForm.get('subscribe').valueChanges.subscribe(checkedValue => {
            const email = this.registrationForm.get('email');
            if(checkedValue){
              email.setValidators(Validators.required);
            } else{
              email.clearValidators();
            }
            email.updateValueAndValidity();
    }
    );
  }
  
  loadCompleteApiData(){
    this.registrationForm.setValue(  {
      username : 'Vishal Kumar',
      email: 'vishal.dev194@gmail.com',
      subscribe : true,
      password: 'vishal',
      confirmPassword : 'vishal',
      address : {
        city : 'Mumbai',
        state : 'Maharashtra',
        pincode : '400708'
      },
      alternateEmails : []
    });
  }

  loadPartialApiData(){
    this.registrationForm.patchValue(  {
      username : 'Vishal Kumar',
      password: 'vishal',
      confirmPassword : 'vishal'
    });
  }
  get userName(){
    return this.registrationForm.get('username'); 
  }
  
  get email(){
    return this.registrationForm.get('email');
  }

  get alternateEmails(){
   return  this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail(){
    this.alternateEmails.push(this.fb.control(''));
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.regService.register(this.registrationForm.value).subscribe(
      response => console.log('Response ' + response.statusText),
      error => console.log('Error ' + error)
    );
  }
}
