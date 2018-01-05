import { Component, OnInit } from '@angular/core';
import { AnimalService} from "../../../services/animal.service";
import { Router, ActivatedRoute, Params} from "@angular/router";
import { GLOBAL} from "../../../services/global";
import { Animal} from "../../../models/Animal";
import {UploadService} from "../../../services/upload.service";
import { UserService} from "../../../services/user.service";
import {fadeLateral} from "../../animationAdmin";


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
    animations: [fadeLateral],
    providers: [AnimalService, UserService]
})
export class ListComponent implements OnInit {


  title = "Listado";
  public resp: any;
  public animal: Animal[];
  public token;
  public busqueda: string;
  public status:string;
  constructor(private _route: ActivatedRoute, private _router:Router,
              private animalService: AnimalService, private userService: UserService) { }

  ngOnInit() {
      this.animalService.getAnimals().subscribe(
          response => {
              this.resp = response;
              this.animal = this.resp.animals;

          }, error => {
              console.log(<any>error);
          }
      );
      this.token = this.userService.gettoken()
  }

  getAnimals(){
      this.animalService.getAnimals().subscribe(
          response => {
              this.resp = response;
              this.animal = this.resp.animals;

          }, error => {
              console.log(<any>error);
          }
      );
  }

  deleteAnimal(id){
    this.animalService.deleteAnimal(this.token, id).subscribe(
      response =>{
        this.status = 'success';
        this.getAnimals();
      },error=>{
        this.status = 'fail';
        })
      }

}
