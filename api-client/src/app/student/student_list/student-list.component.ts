import { Component, OnInit} from '@angular/core';
import { IRegisterStudent } from '../../shared/interfaces';
import { schoolService } from '../../core/services/school.service';
import { StudentService } from '../../core/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import  swal  from 'sweetalert2';

@Component({
    selector : 'app-student-list',
    templateUrl : 'student-list.component.html',
    styleUrls : ['student-list.component.css'],
    providers : [schoolService,StudentService]

})

export class StudentListComponent implements OnInit{

    alert : string;
    model : Array<any> = [];
    levels : Array<number>;
    selectedValue : string;
    getdetail : boolean = false;
    modelDetail : any = [];
    updated : boolean = false;

    constructor(
        private stdServ : StudentService,
        private schoolServ : schoolService,
        private router : Router
    ){}

    ngOnInit(){
        this.levels = [100,200,300,400,500];
    }

    getStd(level : number){
        this.stdServ.getStudent(level).subscribe(
            (result)=>{ this.model = result;console.log(result); },
            (error) =>{ this.alert = JSON.stringify(error)}
        );
    }

    getDetails(mode : any){
        this.getdetail = true;
        this.modelDetail = mode;
        console.log(mode);
    }
    
    update(id : number){
        this.router.navigate(['/student/update',id])
    }
    
    delete(mod : any){
        swal({               
            title: 'Are you sure?',
            text: 'You will not be able to recover the user!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then(() => {
            this.stdServ.delStudent(mod.id).subscribe(
                (result)=>{
                    this.getStd(100)
                 swal(
                'Deleted!',
                `${mod.firstname} has been deleted.`,
                'success'
            ) },
                (error) =>{ }
            )
        },(dismiss) => {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                swal(
                'Cancelled',
                `${mod.firstname.toUpperCase()} is safe :)`,
                'error'
            )
        }})
    }


}
