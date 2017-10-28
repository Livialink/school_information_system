import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CourseComponent } from  './course/course.component';
import { AuthGuard } from '../core/services/auth.guard';
import { ResultAddComponent } from './result/result_add/result-add.component';
import { ResultListComponent } from './result/result_list/result-list.component';
import { ResultTranscriptComponent } from './result/result_transcript/result-transcript.component';

const routes : Routes = [
    { path : 'course-list', component : CourseComponent, canActivate : [AuthGuard]},
    { path : 'result-add', component : ResultAddComponent, canActivate : [AuthGuard]},
    { path : 'result-list', component : ResultListComponent, canActivate : [AuthGuard]},
    { path : 'result-stat', component : ResultTranscriptComponent, canActivate : [AuthGuard]}
]
@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class ContentRoutingModule{}

