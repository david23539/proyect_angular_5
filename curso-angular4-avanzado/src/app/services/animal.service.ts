import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable} from "rxjs/Observable";
import { GLOBAL} from "./global";
import {RequestOptions} from "@angular/http";


@Injectable()
export class AnimalService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addAnimal(token, animal){
    let param = JSON.stringify(animal);
    let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
    });
      return this._http.post(this.url+"animal", param, {headers: header})
  }

  getAnimals(){
    return this._http.get(this.url+'animal');
  }

  getAnimal(id){

      return this._http.get(this.url+'animal/'+id);
  }

  editAnimal(token, id, animal){
    let params = JSON.stringify(animal);
    let header = new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': token
    });
    return this._http.put(this.url + 'update-animal/'+id, params, {headers:header})
  }

  deleteAnimal(token, id){
      let header = new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': token
      });

      return this._http.delete(this.url + 'animal/'+id, {headers:header});

  }

}
