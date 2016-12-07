import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  private UrlWebApi = 'https://jobportal-restapi.herokuapp.com/api/category';
  constructor(private http:Http) {

  }

  getAllCategories():Observable<any[]>  {
    return this.http
        .get(this.UrlWebApi+'/')
        .map(response => response.json());
  }

  getOneCategory(id):Observable<any> {
    return this.http
        .get(this.UrlWebApi+'/'+id)
        .map(response => response.json());
  }

}

