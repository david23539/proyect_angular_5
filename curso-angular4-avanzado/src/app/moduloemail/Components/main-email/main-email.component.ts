import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  templateUrl: './main-email.component.html',
  styleUrls: ['./main-email.component.css']
})
export class MainEmailComponent implements OnInit {

  public title = "Modulo de email";
  constructor() { }

  ngOnInit() {
    console.log("componenete principal del modulo cargado");
  }

}
