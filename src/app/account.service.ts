import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class AccountService {
  private UrlWebApi = 'https://jobportal-restapi.herokuapp.com/api/account';
  public isLoggedIn:boolean = false;
  public _compte:any;
  public loggedIn:Subject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);
  public Compte:Subject<any> = new BehaviorSubject<any>(this._compte);

  constructor(private http:Http) { }

  createAccount(model):Observable<any>  {
    console.log("model service");
    console.log(model);
    var params = "email=" + model.Email + "&password=" + model.Password+ "&firstname=" + model.Firstname + "&lastname=" + model.Lastname+ "&role=" + model.Role;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http
      .post(this.UrlWebApi+'/' , params, {headers: headers})
      .map(response => response.json());

  }
  login(email,password):Observable<any> {
    var params = "email=" + email + "&password=" + password;
    console.log(params);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http
      .post(this.UrlWebApi+'/login' , params, {headers: headers})
      .map(response => response.json());
  }


}

