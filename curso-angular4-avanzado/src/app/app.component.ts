import { Component, DoCheck, OnInit } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers : [UserService]

})
export class AppComponent implements DoCheck, OnInit{
  title = 'NGZOO';
  public emailContacto: string;
  public identity;

  constructor(private _userService: UserService){

  }

  ngDoCheck(){
   // console.log("el docheck se ha lanzado");
    this.emailContacto =  localStorage.getItem('emailContacto');
  }

  ngOnInit(){
    console.log(localStorage.getItem('emailContacto'))
      this.identity = this._userService.getidentity();
  }

  vaciarLocalStorage() {
    localStorage.removeItem('emailContacto');
    console.log("localStorage borrado");
  }
}
