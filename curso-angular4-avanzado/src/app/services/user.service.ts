import { Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable} from "rxjs/Observable";
import { GLOBAL} from "./global";
@Injectable()

export class UserService{
    public url: String;
    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    }

    register(user_to_register){
        let param = JSON.stringify(user_to_register);
        let header = new HttpHeaders({'Content-Type': 'application/json'});
        return this._http.post(this.url+"register", param, {headers: header})//.map(r => JSON.parse(r))
    }
}