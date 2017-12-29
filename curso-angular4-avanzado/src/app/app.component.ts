import { Component, DoCheck, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements DoCheck, OnInit{
  title = 'NGZOO';
  public emailContacto: string;
  ngDoCheck(){
   // console.log("el docheck se ha lanzado");
    this.emailContacto =  localStorage.getItem('emailContacto');
  }

  ngOnInit(){
    console.log(localStorage.getItem('emailContacto'))
  }

  vaciarLocalStorage() {
    localStorage.removeItem('emailContacto');
    console.log("localStorage borrado");
  }
}
