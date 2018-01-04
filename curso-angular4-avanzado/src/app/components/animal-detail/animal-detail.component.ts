import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import { GLOBAL} from "../../services/global";
import {AnimalService} from "../../services/animal.service";
import {Animal} from "../../models/Animal";

@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html',
    providers: [AnimalService]
})
export class AnimalDetailComponent implements OnInit {
  public animal: Animal;
  public url:string;
  public value: any;
  constructor(private _animalService:AnimalService, private _route:ActivatedRoute, private _router:Router) {
    this.url = GLOBAL.url;
  }


  ngOnInit(){
    console.log('componente animal-detail cargado');
    this.getAnimal();
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

}
