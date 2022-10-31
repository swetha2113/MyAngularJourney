import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public text = "TextStyle";
  public sizes = "TextSize";
  constructor() { }

  ngOnInit(): void {
  }

}
