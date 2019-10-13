import { Component } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-unit-testing';
  name = 'Vishal Kumar';
  setvariable =  false;
  setrandom = 0;

  getname(){
    console.log('name : ' + name);
    this.setvariable =  true;
    this.setrandom = 120;
  }
}
