import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../core/services/student.service';
import { schoolService } from '../../../core/services/school.service';
import { ResultService } from '../../../core/services/result.service';
import { IAddResult } from '../../../shared/interfaces';
@Component({
    selector : 'app-result-add',
    templateUrl : './result-add.component.html',
})

export class ResultAddComponent implements OnInit{


    model : IAddResult;
    courses : Array<any>;
    students : Array<any>;
    levels : Array<number>;
    semesters : Array<number>;

    constructor(
        private schoolServ : schoolService,
        private resultServ : ResultService,
        private stdServ : StudentService
    ){}
    ngOnInit(): void {
        this.schoolServ.getCourses().subscribe(
            (data) => this.courses = data.map(res=>{return [res.id,res.name]}),
            (error) => {}
        )
        this.levels = [100,200,300,400,500];
        this.model = new IAddResult();
        this.semesters = [1,2];
    }

    getStudents(level : number) : void{
        this.stdServ.getStudent(level).subscribe(
            (data) =>{console.log(data); this.students = data}
        )
        
    }

    addResult() : void {
        this.resultServ.addResult(this.model).subscribe(
            (data) => {console.log(data)},
            (error) => console.log(error)
        )
    }

}

    