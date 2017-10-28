import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from '../core/services/auth.guard';
import { StudentAddComponent } from './student_add/student-add.component';
import { StudentListComponent } from './student_list/student-list.component';
import { StudentUpdateComponent } from './student_update/student-update.component';
const routes : Routes = [
    { path : 'student/add', component : StudentAddComponent, canActivate : [AuthGuard] },
    { path : 'student/list', component : StudentListComponent,canActivate : [AuthGuard]},
    { path : 'student/update/:id', component : StudentUpdateComponent, canActivate: [AuthGuard] }
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class StudentRoutingModule{

}