import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      Topic: Interpolation
      This is your first practical session {{ name.toUpperCase() }}!
    </p>
    <p>We are located here: {{myUrl}}</p>
    <h1> {{fromParent}} </h1>
    <button (click)="passtoParent()">send</button>
    
  `,
  styles: [
    `
    p{
      text-align: center;
      font-size: 20px;
      color: "black";
    }

    `
  ]
})
export class TestComponent implements OnInit {

  public name = "Swetha";
  public myUrl = window.location.href;

  @Input() public fromParent: any;

  @Output() customEvent = new EventEmitter();
  message = "pass to parent";

  constructor() { }

  ngOnInit(): void {
  }

  passtoParent(){
    this.customEvent.emit(this.message);

  }
  
}
