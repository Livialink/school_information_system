import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { AuthService } from './auth.service'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ILogin, IRegisterStudent, IUpdateStudent, IEnroll} from '../../shared/interfaces';

@Injectable()
export class StudentService {
    studentUrl : string = '/api';
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

    getStudent(level : number): Observable<any>{
        let url = `${this.studentUrl}/student/std?level=${level}`;
        return this.http.get(url,this.options)
                .map((response : Response)=> response.json())
                .catch(this.handleError)
    }
    
    addStudent(stdData : IRegisterStudent) : Observable<any>{
        let url = `${this.studentUrl}/student/std`;
        return this.http.post(url,stdData,this.options)
                .map((res : Response)=> res.json())
                .catch(this.handleError);
    }

    delStudent(id : number) : Observable<any>{
        let url = `${this.studentUrl}/student/std/?id=${id}`;
        return this.http.delete(url,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }

    getStudentById(id : number) : Observable<any>{
        let url = `${this.studentUrl}/student/std/${id}`;
        return this.http.get(url,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }

    updateStudent(stdData : IUpdateStudent) : Observable<any>{
        let url = `${this.studentUrl}/student/std`;
        return this.http.patch(url,stdData,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }

    enrollStudent(enroll : IEnroll) : Observable<any>{
        let url = `${this.studentUrl}/student/enroll`;
        return this.http.post(url,enroll,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }

    getEnrollments(cosId : number) : Observable<any>{ 
        let url = `${this.studentUrl}/student/enroll?cosId=${cosId}`;
        return this.http.get(url,this.options)   
                .map((res : Response) => res.json())
                .catch(this.handleError);    
    }



    handleError(error: any) {
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