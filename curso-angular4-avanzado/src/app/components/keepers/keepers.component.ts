import { Component, OnInit } from '@angular/core';
import {fundido} from "../animations";
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {Animal} from "../../models/Animal";
import {GLOBAL} from "../../services/global";

@Component({
  selector: 'keepers',
  templateUrl: './keepers.component.html',
  animations: [fundido],
    providers: [UserService]
})
export class KeepersComponent implements OnInit {

  public title = "Esto son los cuidadores";
    public resp: any;
    public user: User[];
    public url: string;
  constructor(private _userService:UserService) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log("se ha cargado cuidadores");
    this.getKeepers();
  }

    getKeepers(){
        this._userService.getKeeper().subscribe(
            response => {
                this.resp = response;
                console.log(this.resp);
                this.user = this.resp.users;
                console.log(this.user);
            }, error => {
                console.log(<any>error);
            }
        );
    }

}
