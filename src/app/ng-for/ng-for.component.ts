import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  public dishes = ["Boiled eggs","fried eggs","poached","omlette","Sunny side up"];
  constructor() { }

  ngOnInit(): void {
  }

}
