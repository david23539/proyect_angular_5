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
    this.user = new User("","","","","","ROLE_USER","");
  }

  ngOnInit() {

  }

  onSubmit(registerForm){
    this._userService.register(this.user).subscribe(
        response =>{
          if(response) {
             // this.user = response.user;
              registerForm.reset();
              this.mensaje = "success";

              console.log("exito");
          }

        },
        error =>{
            this.mensaje = "fail";
            console.log(error.error.message);
          console.log(<any>error)

        }
    );
  }
}
