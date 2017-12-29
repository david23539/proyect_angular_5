import { Component, OnInit } from '@angular/core';
import {fundido} from "../animations";

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  animations: [fundido]
})
export class KeepersComponent implements OnInit {

  public title = "Esto son cuidadores";

  constructor() { }

  ngOnInit() {
    console.log("se ha cargado cuidadores");
  }

}
