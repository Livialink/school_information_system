import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../core/services/student.service';
import { schoolService } from '../../core/services/school.service';
import {  } from '../../shared/interfaces';

@Component({
    selector : 'app-course',
    templateUrl : './course.component.html',
    providers : [StudentService,schoolService]
})

export class CourseComponent implements OnInit{

    model : Array<any>;
    courses : Array<any>;
    faculties : Array<any>;
    departments : Array<any>;
    
    constructor(
        private stdserv : StudentService,
        private schoolserv : schoolService
    ){}

    ngOnInit(){
        this.schoolserv.getFaculties()
        .subscribe(
            (result)=>{ this.faculties = result.map(res=>{ return [res.id,res.name]})},
            (error) => console.log(error)
        );
    }
    
    getDept(facId : number){
        this.schoolserv.getDepartments(facId)
        .subscribe(
            (result) => { this.departments = result.map(res=>{return [res.id,res.name]})},
            (error) => console.log(error)
        );
    }

    getCourse(deptId : number){
        this.schoolserv.getCoursesByDept(deptId)
        .subscribe(
            (result) =>{ this.courses = result.map(res => { 
                return [res.id,res.name,res.description,res.courseCode,res.creditUnit]})},
            (error) => console.log(error)
        );
    }

    enrollments(cosId : number){
        this.stdserv.getEnrollments(cosId).subscribe(
            (result)=> { this.model = result},
            (error) => console.log(error)
        )
    }
}