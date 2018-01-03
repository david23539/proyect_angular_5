import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User} from "../../models/user";
import {GLOBAL} from "../../services/global";
import { UserService} from "../../services/user.service";

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
    providers: [UserService]
})
export class UserEditComponent implements OnInit {

  public title: string;
  public user:  User;
  public identity;
  public token;



  constructor(private _userService: UserService) {
    this.title ="Actualizar mis datos";
    this.identity = this._userService.getidentity();
    this.token = this._userService.gettoken();
    this.user = this.identity;
  }

  ngOnInit() {
    console.log("Se ha cargado user edit");
  }

}
