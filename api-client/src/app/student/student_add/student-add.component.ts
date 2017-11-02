import { Component, OnInit} from '@angular/core';
import { IRegisterStudent } from '../../shared/interfaces';
import { schoolService } from '../../core/services/school.service';
import { StudentService } from '../../core/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector : 'app-student-add',
    templateUrl : 'student-add.component.html',
    providers : [schoolService,StudentService]

})

export class StudentAddComponent implements OnInit{

    levels : Array<number> = [100,200,300,400,500];
    registerModel : IRegisterStudent = new IRegisterStudent();
    faculties : string;
    selectedValue : number;
    departments : string;
    alertt : string ;
    constructor(
        public sch : schoolService,
        public activeRoute : ActivatedRoute,
        public stdSev : StudentService
    ){}
    
    ngOnInit(): void {
        /*this.registerModel = new IRegisterStudent('jane','jane@gmail.com'
        ,'passcode',9879898,'66 jsna','janem','last','imo',200,new Date(),13,'user');*/
        this.sch.getFaculties().subscribe(result =>{
            let fac = result.map((res) => {return [res.name,res.id]});
            this.faculties = fac;
        });
        //this.levels = [100,200,300,400,500];
        //this.registerModel  = new IRegisterStudent();
    }
    
    getDept(id : number){
        this.sch.getDepartments(id).subscribe(result=>{
            let dept = result.map((res) => { return [res.name,res.deptCode,res.id] });
            this.departments = dept;
        })
    }

    register(){
        this.registerModel.date = new Date();
        this.registerModel.role = 'user';
        this.stdSev.addStudent(this.registerModel)
        .subscribe((result)=>{console.log(JSON.stringify(result));
            this.alertt = JSON.stringify(result);
        },(error)=>{ 
            this.alertt = JSON.stringify(error.error);
        })
        
    }

}