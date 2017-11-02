import { Component} from '@angular/core';
import { StudentService } from '../core/services/student.service';

@Component({
    selector : 'app-home',
    templateUrl : './home.component.html',
    styleUrls : ['./home.component.css'],
    providers : [StudentService]
})

export class HomeComponent{
    model : any;
    constructor(){
       /* studentservice.getStudent(200).subscribe(result=>{
            if(result)
                this.model = result;
            else
                console.log(result);
        });*/
    }

//    get diagnostic (){ return JSON.stringify(this.model)}
    


}