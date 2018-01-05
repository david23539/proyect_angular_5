import { Component, OnInit } from '@angular/core';
import { AnimalService} from "../../../services/animal.service";
import { UserService} from "../../../services/user.service";
import { Router, ActivatedRoute, Params} from "@angular/router";
import { GLOBAL} from "../../../services/global";
import { Animal} from "../../../models/Animal";
import {UploadService} from "../../../services/upload.service";
import { fadeLateral} from "../../animationAdmin";

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
    providers: [AnimalService, UserService, UserService],
    animations: [fadeLateral]
})
export class AddComponent implements OnInit {

  title = "Añadir";
  public animal;
  public identity;
  public token;
  public url;
  public status: string;
  public is_edit = false;

  constructor(private _route: ActivatedRoute, private _router:Router, private userService: UserService,
              private animalService: AnimalService, private  uploads:UploadService) {
    this.animal = new Animal('','', 2017, '', '', '');
    this.identity = this.userService.getidentity();
    this.token = this.userService.gettoken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    console.log('animal-add-component a sido cargado');
  }

  onSubmit(){
    console.log(this.animal);
    this.animalService.addAnimal(this.token, this.animal).subscribe(
        response =>{

            this.status = 'success';
            this.animal = response;//dentro del response existe una propiedad animal por eso se resetea de nuevo
            this.animal = this.animal.animal;
            if(this.filesToUpload){
                this.uploads.makeFileRequest(this.url + 'upload-image-animal/'+this.animal._id, [], this.filesToUpload, this.token, 'image')
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

}
