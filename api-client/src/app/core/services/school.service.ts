import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { AuthService } from './auth.service'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IRegisterAdmin, IEnroll} from '../../shared/interfaces';

@Injectable()
export class schoolService {
    schoolUrl : string = '/api/user';
    private options : RequestOptions;

    constructor(
       private http : Http,
       private authService : AuthService 
    ){
        this.options = new RequestOptions({ headers : new Headers({
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('jwt')).token}`
        })});
    }

    activateStudent(stdId : number) : Observable<any>{
        let url = `${this.schoolUrl}/activate?stdId=${stdId}`;
        return this.http.get(url,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError)
    }

    getAdmins() : Observable<any>{
        let url = `${this.schoolUrl}/admins`;
        return this.http.get(url,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }

    addAdmin(admins : IRegisterAdmin) : Observable<any>{
        let url = `${this.schoolUrl}/admins`;
        return this.http.post(url,admins,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }

    getFaculties() : Observable<any>{
        let url = `${this.schoolUrl}/getFac`;
        return this.http.get(url,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }

    getDepartments(facId : number) : Observable<any>{
        let url = `${this.schoolUrl}/getDept?facId=${facId}`;
        return this.http.get(url,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }

    getCourses() : Observable<any>{
        let url = `${this.schoolUrl}/getCos`;
        return this.http.get(url,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }

    getCoursesByDept(deptId : number) : Observable<any>{
        let url = `${this.schoolUrl}/getCosByDept/${deptId}`;
        return this.http.get(url,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }


    private handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json();
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }
}