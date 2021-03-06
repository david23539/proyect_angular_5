import { Component, DoCheck, OnInit } from '@angular/core';
import {UserService} from "./services/user.service";
import { Router, ActivatedRoute, Params} from '@angular/router';
import {GLOBAL} from "./services/global";

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
 public url: string
  constructor(private _userService: UserService, private _route:ActivatedRoute, private _router:Router){
    this.url = GLOBAL.url;
  }

  ngDoCheck(){
   // console.log("el docheck se ha lanzado");
      this.identity = this._userService.getidentity();
  }

  ngOnInit(){
    console.log(localStorage.getItem('emailContacto'))

  }

  vaciarLocalStorage() {
    localStorage.removeItem('emailContacto');


    console.log("localStorage borrado");
  }
  logout(){
      localStorage.clear();
      this.identity = null;
      this._router.navigate(['/']);
  }
}
