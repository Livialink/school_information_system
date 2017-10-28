import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ContentRoutingModule } from './content-routing.module';
import { CourseComponent } from './course/course.component';
import { ResultAddComponent } from './result/result_add/result-add.component';
import { ResultListComponent } from './result/result_list/result-list.component';
import { StudentService } from '../core/services/student.service';
import { schoolService } from '../core/services/school.service';
import { ResultTranscriptComponent } from './result/result_transcript/result-transcript.component';
import { ResultService } from '../core/services/result.service';

@NgModule({
    imports : [
        SharedModule,
        ContentRoutingModule
    ],
    declarations : [
        CourseComponent,
        ResultAddComponent,
        ResultListComponent,
        ResultTranscriptComponent
    ],
    providers : [ 
        StudentService, 
        schoolService,
        ResultService
    ]
})

export class ContentModule{}