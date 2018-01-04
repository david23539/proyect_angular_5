import { Component, OnInit } from '@angular/core';
import { AnimalService} from "../../../services/animal.service";
import { Router, ActivatedRoute, Params} from "@angular/router";
import { GLOBAL} from "../../../services/global";
import { Animal} from "../../../models/Animal";
import {UploadService} from "../../../services/upload.service";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
    providers: [AnimalService]
})
export class ListComponent implements OnInit {


  title = "Listado";
  public resp: any;
  public animal: Animal[];
  //numbers = [0,1,2,3,4,5];
  numbers = new Array(10);
  constructor(private _route: ActivatedRoute, private _router:Router,
              private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.getAnimals().subscribe(
        response=>{
            this.resp = response;
            this.animal = this.resp.animals;

        },error=>{
          console.log(<any>error);
      }
    )
  }

}
