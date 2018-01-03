import { Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable} from "rxjs/Observable";
import { GLOBAL} from "./global";
@Injectable()

export class UserService{
    public url: String;
    public identity;
    public token;
    constructor(private _http: HttpClient){
        this.url = GLOBAL.url;
    }

    register(user_to_register){
        let param = JSON.stringify(user_to_register);
        let header = new HttpHeaders({'Content-Type': 'application/json'});
        return this._http.post(this.url+"register", param, {headers: header})//.map(r => JSON.parse(r))
    }
    sigup(user_to_login, gettoken = null){
        if(gettoken != null){
            user_to_login.gettoken = gettoken;
        }else{
            user_to_login.gettoken = "";
        }

        let param = JSON.stringify(user_to_login);
        let header = new HttpHeaders({'Content-Type': 'application/json'});
        return this._http.post(this.url + 'login', param, {headers: header});//.map(res => res.json());
    }
    getidentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != undefined){
            this.identity = identity;
        }else{
            this.identity = null;
        }
        return this.identity;

    }

    gettoken(){
        let token = localStorage.getItem('token');
        if(token != undefined){
            this.token = token
        }else{
            this.token= null;
        }
        return this.token;
    }

    updateUser(user_to_update){
        delete user_to_update.password;
        let params = JSON.stringify(user_to_update);

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this.gettoken()
        });
        return this._http.put(this.url + 'update-user/'+user_to_update._id, params, {headers:headers});
    }
}