import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../core/services/student.service';
import { schoolService } from '../../../core/services/school.service';
import { ResultService } from '../../../core/services/result.service';

@Component({
    selector : 'app-result-list',
    templateUrl : './result-list.component.html'
})

export class ResultListComponent implements OnInit{

    model : Array<any> = [];
    courses : Array<any> ;
    student : Array<any> = [];
    courseDetail : any;

    constructor(
        private schServ : schoolService,
        private stdServ : StudentService,
        private resultServ : ResultService
    ){}

    ngOnInit(): void {
        this.schServ.getCourses().subscribe(
            (result) => { this.courses = result.map(res=>{return [res.id,res.name]});},
            (error) => { console.log(error)}
        );
    }

    getResults(cosId : number) : void{
        this.model = [];
        this.resultServ.getResults(cosId).subscribe(
            (result) => {
                this.courseDetail = {
                    name: result.name ,
                    code: result.courseCode,
                    unit: result.creditUnit
                };
             result.Results.forEach(value=>{
                    this.stdServ.getStudentById(value.StudentId).subscribe(
                        (data)=>{ this.model.push(Object.assign(value,data.User))}
                )
             })},
            (error) => console.log(error)
        )
    }

    delResult(resultId : number) : void{
        this.resultServ.delResult(resultId).subscribe(
            (result) => {},
            (error) => console.log(error)
        )
    }

    getStudent(results : any) {
        //results.forEach((value)=>{
            this.stdServ.getStudentById(results).subscribe(
                (data) => {  
                    this.student.push(data.User)
                },
            )
      //  })        
    }

}
