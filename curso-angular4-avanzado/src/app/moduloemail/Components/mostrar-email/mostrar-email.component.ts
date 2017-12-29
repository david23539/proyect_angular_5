import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  templateUrl: './mostrar-email.component.html',
  styleUrls: ['./mostrar-email.component.css']
})
export class MostrarEmailComponent implements OnInit, DoCheck {
  public title = "este es mostrar email";
  constructor() { }

  public emailContacto: string;
  ngDoCheck(){

    this.emailContacto =  localStorage.getItem('emailContacto');
  }

  ngOnInit(){
    this.emailContacto =  localStorage.getItem('emailContacto');
  }

  vaciarLocalStorage() {
    localStorage.removeItem('emailContacto');
    console.log("localStorage borrado");
    this.emailContacto = "";

  }


}
