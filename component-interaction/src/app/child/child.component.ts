import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <h3> Data coming from parent to child: {{data}}</h3>

      <button (click)="fireEvent()">Get data from Child</button>

  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('parentdata') public data; 

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
   return this.childEvent.emit('Hello this message is from child');
  }
}
