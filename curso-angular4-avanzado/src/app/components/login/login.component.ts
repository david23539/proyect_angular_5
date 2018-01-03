import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User} from "../../models/user";
import { UserService} from "../../services/user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
    providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title = "Login";
  public user: User;
  public identity;
  public token;
  public status: string;
    constructor(private  _route: ActivatedRoute, private_router: Router, private _userService: UserService) {
        this.user = new User('','','','','','ROLE_USER','');

    }

  ngOnInit() {
        console.log(this._userService.getidentity());
        console.log(this._userService.gettoken());
  }

  onSubmit(){
    this._userService.sigup(this.user, null).subscribe(
        response=>{
            this.identity = response;
            //console.log(this.identity._id);
            if(!this.identity.issetuser || !this.identity.issetuser._id){
              alert("El usuario no se ha logeado correctamente")
            }else{
                this.identity.issetuser.password = '';
                console.log(this.identity.issetuser);
                localStorage.setItem('identity', JSON.stringify(this.identity.issetuser));
                this._userService.sigup(this.user, 'true').subscribe(
                    response=>{
                        this.token = response;
                        this.token = this.token.token;
                        if(this.token.left <= 0){
                            alert("Wl token no se ha generado");
                        }else{
                            localStorage.setItem('token', this.token);
                            this.status= 'success';
                        }

                    },error=>{
                        console.log(error)
                    }
                )
            }
        },error=>{
            var errorMensaje = <any>error;
            if(errorMensaje != null){
                this.status= 'error';
                console.log(error);
            }else{
                console.log('no hay error');
            }
        }
    )
  }
}
