import { Component, OnInit } from '@angular/core';
import {AnimalService} from "../../services/animal.service";
import { Router, ActivatedRoute, Params} from "@angular/router";
import { GLOBAL} from "../../services/global";
import { Animal} from "../../models/Animal";
import {UploadService} from "../../services/upload.service";
import { UserService} from "../../services/user.service";
import { fundido} from "../animations";

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  animations: [fundido],
    providers: [AnimalService]

})
export class AnimalsComponent implements OnInit {

    public title = "Animales";
    public resp: any;
    public animal: Animal[];
    public url;
  constructor(private animalService: AnimalService) {
    this.url = GLOBAL.url
  }

  ngOnInit() {
    this.getAnimals();
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

}
