import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public number = 0;
  public greetings = "";
  onClick(){
    this.greetings = "Welcome there!!!";
  }
  onadd(){
    this.number=this.number+1;
  }
  onsub(){
    this.number = this.number-1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
