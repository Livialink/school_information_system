import { Component, OnInit} from '@angular/core';
import { IUpdateStudent } from '../../shared/interfaces';
import { schoolService } from '../../core/services/school.service';
import { StudentService } from '../../core/services/student.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
    selector : 'app-student-update',
    templateUrl : 'student-update.component.html',
    providers : [schoolService,StudentService]

})

export class StudentUpdateComponent implements OnInit{
    

    model : IUpdateStudent = new IUpdateStudent();
    alert : string;
    returnUrl : string;
    levels : Array<number>;
    selectedValue : string;
    modelView : IUpdateStudent;
    updated : boolean = false;

    constructor(
        private route : ActivatedRoute,
        private router : Router,
        private studentServ : StudentService
    ){}

    ngOnInit(){       
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

        this.levels = [100,200,300,400,500];

        let iit = this.route.paramMap
            .switchMap((params : ParamMap) =>
                this.studentServ.getStudentById(parseInt(params.get('id')))
            );
        iit.subscribe(
            (result)=>{ 
                let jj = new IUpdateStudent();
                jj.firstname = result.User.firstname;
                jj.id = result.UserId;
                jj.lastname = result.User.lastname;
                jj.password = result.User.password;
                jj.level = result.level;
                jj.phone = result.User.phone;
                this.model = jj},
            (error) => { this.alert = error }
        )
    }

    update(){
        this.studentServ.updateStudent(this.model)
        .subscribe((result)=>{ 
            this.modelView = this.model;
            this.updated = true;
        },(error)=>{
            console.log(error);
            this.alert = JSON.stringify(error);
        })
    }

    goBack(){
        history.back();
    }
}