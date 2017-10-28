import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ILogin, IRegisterStudent} from '../../shared/interfaces';

@Injectable()
export class AuthService {
    private apiUrl : string = '/api/';
    private isAuthenticated : boolean = false;
    private redirectUrl : string;
    public token : string;
    private header : Headers = new Headers({
        'Content-Type' : 'application/json'
        /*'Authorization' : `Bearer ${JSON.parse(localStorage.getItem('jwt')).token}`*/
    });
    @Output() authChanged : EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private http : Http){ }

    private userAuthChanged(status : boolean){
        this.authChanged.emit(status);
    }


    login(userLogin : ILogin) : Observable<boolean>{
       // let form = `username=${userLogin.username}&password=${userLogin.password}`;
        return this.http.post(this.apiUrl +'token',userLogin,{headers : this.header})
            .map((res : Response) =>{
                localStorage.removeItem('jwt');
                this.token = res.json().token;
                localStorage.setItem('jwt',JSON.stringify({
                     username : userLogin.username ,
                     token : res.json().token})
                    );
                this.isAuthenticated = true;
                this.userAuthChanged(true);
                return true;
            })
            .catch(this.handleError);
    }

    logout(){
        localStorage.removeItem('jwt');
    }
    registerStd(regStd : IRegisterStudent) : Observable<any>{
        return this.http.post(this.apiUrl + 'student/std',regStd)
            .map((res : Response)=>{
                return res.json();
            })
            .catch(this.handleError);
    }
        
    handleError(error: any) {
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