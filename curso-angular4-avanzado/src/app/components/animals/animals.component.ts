import { Component, OnInit } from '@angular/core';
import { fundido} from "../animations";

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  animations: [fundido]

})
export class AnimalsComponent implements OnInit {

  public title = "esto es animales";

  constructor() { }

  ngOnInit() {
    console.log("se ha cargado animals");
  }

}
