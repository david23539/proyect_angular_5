import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from "@angular/router";
import { GLOBAL} from "../../../services/global";
import { Animal} from "../../../models/Animal";
import {UploadService} from "../../../services/upload.service";
import { AnimalService} from "../../../services/animal.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'edit',
  templateUrl: '../add/add.component.html',
    providers: [AnimalService, UserService, UserService]
})
export class EditComponent implements OnInit {

  title = "Editar";
    public animal;
    public identity;
    public token;
    public url;
    public status: string;
    public value: any;
    public is_edit = true;

  constructor(private _route: ActivatedRoute, private _router:Router, private userService: UserService,
              private _animalService: AnimalService, private  uploads:UploadService) {
      this.animal = new Animal('','', 2017, '', '', '');
    this.identity = this.userService.getidentity();
      this.token = this.userService.gettoken();
      this.url = GLOBAL.url;
      this.is_edit = true;

  }

  getAnimal(){
        this._route.params.forEach((params:Params)=>{
            let id = params['id'];

            this._animalService.getAnimal(id).subscribe(
                response=>{
                    this.value = response;
                    this.animal = this.value.animal;
                },error=>{
                    console.log(error);
                    this._router.navigate(['/home']);
                }
            )
        })
    }

    onSubmit(){
        let id = this.animal._id;
        this._animalService.editAnimal(this.token, id, this.animal).subscribe(
            response =>{
                this.status = 'success';
                this.animal = response;//dentro del response existe una propiedad animal por eso se resetea de nuevo
                this.animal = this.animal.animal;
                if(this.filesToUpload){
                    this.uploads.makeFileRequest(this.url + 'upload-image-animal/'+id, [], this.filesToUpload, this.token, 'image')
                        .then((result:any)=> {
                            this.animal.image = result.image;
                            this._router.navigate(['/admin-panel/listado']);
                        });
                }else{
                    this._router.navigate(['/admin-panel/listado']);
                }
            },error=>{
                this.status = 'error';
            }
        )
    }

    public filesToUpload: Array<File>;
    fileChangeevent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }


  ngOnInit() {
    this.getAnimal();
  }

}
