import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JobService {
    private UrlWebApi = 'https://jobportal-restapi.herokuapp.com/api/jobs';


    constructor(private http:Http) {

    }

    getJobs():Observable<any[]>  {
        return this.http
            .get(this.UrlWebApi+'/')
            .map(response => response.json());

    }

    getJob(id):Observable<any> {
        return this.http
            .get(this.UrlWebApi+'/'+id)
            .map(response => response.json());
    }
    searchJobs(keyword,location,job_category):Observable<any> {
        return this.http
            .get(this.UrlWebApi+'/search/'+keyword+'/'+location+'/'+job_category)
            .map(response => response.json());
    }

  createJob(job):Observable<any> {
    var params = "title=" + job.title + "&description=" + job.description+ "&experience=" + job.experience+ "&type_job=" + job.type_job +
      "&contrat=" + job.contrat + "&company.name=" + job.company_name+ "&company.location=" + job.company_location+ "&category.name=" + job.category;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http
      .post(this.UrlWebApi+'/' , params, {headers: headers})
      .map(response => response.json());
  }

  editJob(job):Observable<any> {
    var params = "title=" + job.title + "&description=" + job.description+ "&experience=" + job.experience+ "&type_job=" + job.type_job +
      "&contrat=" + job.contrat + "&company.name=" + job.company_name+ "&company.location=" + job.company_location+ "&category.name=" + job.category;
    console.log(params);
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http
      .put(this.UrlWebApi+'/'+job.id , params, {headers: headers})
      .map(response => response.json());
  }

}

