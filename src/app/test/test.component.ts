import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      Topic: Interpolation
      This is your first practical session {{ name.toUpperCase() }}!
    </p>
    <p>We are located here: {{myUrl}}</p>
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
  constructor() { }

  ngOnInit(): void {
  }

}
