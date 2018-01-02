import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User} from "../../models/user";
import {GLOBAL} from "../../services/global";
import { UserService} from "../../services/user.service";


@Component({
  selector: 'register',
  templateUrl: './register.component.html'


})
export class RegisterComponent implements OnInit {

    public title = "Registro";
    public user: User;
    public mensaje: string;
  constructor(private _userService:UserService ,private  _route: ActivatedRoute, private_router: Router) {
    this.user =new User("","","","","","ROLE_USER","");
  }

  ngOnInit() {

  }

  onSubmit(){
    this._userService.register(this.user).subscribe(
        response =>{
          if(response.user._id) {
              this.user = response.user;
              this.mensaje = "El registro se ha realizado corectamente, identificate con "+ this.user
          }
        },
        error =>{
          console.log(<any>error)
        }
    );
  }
}
