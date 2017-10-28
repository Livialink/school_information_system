import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { AuthService } from './auth.service'
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IAddResult, IUpdateResult} from '../../shared/interfaces';


@Injectable()
export class ResultService{
    private resultUrl : string = '/api/result';
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

    getResults(cosId : number) : Observable<any>{
        let url = `${this.resultUrl}?cosId=${cosId}`;
        return this.http.get(url,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }

    addResult(result : IAddResult) : Observable<any>{

        return this.http.post(this.resultUrl,result,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }
    
    delResult(resultId : number) : Observable<any>{
        let url  = `${this.resultUrl}?id=${resultId}`;
        return this.http.delete(url,this.options)
                .map((res : Response) => res.json())
                .catch(this.handleError);
    }

    updateResult(resultId : number,result : IUpdateResult) : Observable<any>{
        let url = `${this.resultUrl}?id=${resultId}`;
        return this.http.patch(url,result,this.options)
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