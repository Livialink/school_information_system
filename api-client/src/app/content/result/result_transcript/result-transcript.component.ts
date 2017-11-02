import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../core/services/student.service';
import { schoolService } from '../../../core/services/school.service';

@Component({
    selector : 'app-result-transcript',
    templateUrl : './result-transcript.component.html',
    
})

export class ResultTranscriptComponent implements OnInit{

    model : any;
    students : Array<any>;
    
    ngOnInit(): void {
        //throw new Error("Method not implemented.");
    }

}
