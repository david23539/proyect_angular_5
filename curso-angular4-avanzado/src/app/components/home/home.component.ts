import { Component, OnInit } from '@angular/core';
import {fundido} from "../animations";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  animations:[fundido]
})
export class HomeComponent implements OnInit {

  public title = "Bienvenido a NGZOO";

  constructor() { }

  ngOnInit() {
    console.log("El On Init se ha ejecutado home.componnet")
  }

}
