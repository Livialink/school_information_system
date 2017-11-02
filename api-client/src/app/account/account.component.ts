import { Component, OnInit, } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
//import { Login } from './login';
import { ILogin } from '../shared/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
    selector : 'login-form  ',
    templateUrl : './account.component.html',
    styles : ['./account.component.css']
})

export class AccountComponent implements OnInit {

    loginModel : ILogin;
    registered = true;
    hide = true;
    error : any = false;//false;
    returnUrl  : string;
    email  = new FormControl('',[Validators.required, Validators.email])
    constructor(
        private route : ActivatedRoute,
        private router : Router,
        private authservice : AuthService
    ){}

    ngOnInit(){
        this.authservice.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin/dashboard';
        this.loginModel = new ILogin()


    }

    getErrorMessage(){
        return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
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
