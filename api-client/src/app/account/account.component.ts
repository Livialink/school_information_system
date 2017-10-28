import { Component, OnInit } from '@angular/core';
//import { Login } from './login';
import { ILogin } from '../shared/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
    selector : 'login-form  ',
    templateUrl : './account.component.html',
    styles : ['']
})

export class AccountComponent implements OnInit {

    loginModel : ILogin  = new ILogin();
    registered = true;
    error : any = false;//false;
    returnUrl  : string;

    constructor(
        private route : ActivatedRoute,
        private router : Router,
        private authservice : AuthService
    ){}

    ngOnInit(){
        this.authservice.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    login(){
        //this.submitted = true;
        console.info(JSON.stringify(this.loginModel));
        this.authservice.login(this.loginModel).subscribe(result =>{
            if(result === true){
                this.router.navigate([this.returnUrl])
            }else{
                this.error  = true;
            }
        });
    }

    get diagnostic() { return JSON.stringify(this.loginModel);}
}
