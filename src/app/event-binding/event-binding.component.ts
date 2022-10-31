import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public greetings = "";
  onClick(){
    this.greetings = "Welcome there!!!";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
