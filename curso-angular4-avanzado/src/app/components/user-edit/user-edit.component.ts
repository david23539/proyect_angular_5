import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User} from "../../models/user";
import {GLOBAL} from "../../services/global";
import { UserService} from "../../services/user.service";
import {UploadService} from "../../services/upload.service";

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
    providers: [UserService, UploadService]
})
export class UserEditComponent implements OnInit {

  public title: string;
  public user:  User;
  public identity;
  public token;
  public status;
  public url;


  constructor(private _userService: UserService, private _uploadService: UploadService) {
    this.title ="Actualizar mis datos";
    this.identity = this._userService.getidentity();
    this.token = this._userService.gettoken();
    this.user = this.identity;
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log("Se ha cargado user edit");
  }

  onSubmit(){

    this._userService.updateUser(this.user).subscribe(
        response=>{
          if(!response){
            this.status = 'error';
          }else{
            localStorage.setItem('identity', JSON.stringify(this.user))
              this._uploadService.makeFileRequest(this.url + 'upload-image-user/'+this.user._id, [], this.filesToUpload, this.token, 'image')
                  .then((result:any)=>{
                    this.user.image = result.image;
                      localStorage.setItem('identity', JSON.stringify(this.user));
                      this.status = 'success'
                  })
          }
        },error=>{
          var errorMesaje = <any>error;
          if(errorMesaje != null){
            this.status = 'error';
          }
        }
    )
  }
 public filesToUpload: Array<File>;
  fileChangeevent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }

}
