import { Component, OnInit } from '@angular/core';
import { fundido} from "../animations";

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  animations: [fundido]
})
export class ContactoComponent implements OnInit {
 public title = "esto es contacto";
 public emailContacto: string;

  constructor() { }

  ngOnInit() {
    // console.log("se ha podido cargado contacto");

  }

  guardarEmail() {
    localStorage.setItem('emailContacto',this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }
}
