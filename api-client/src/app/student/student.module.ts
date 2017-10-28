import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { StudentAddComponent } from './student_add/student-add.component';
import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student_list/student-list.component';
import { StudentUpdateComponent } from './student_update/student-update.component';

@NgModule({
    imports : [
        SharedModule,
        StudentRoutingModule
    ],
    declarations : [
        StudentAddComponent,
        StudentListComponent,
        StudentUpdateComponent
    ]

})

export class StudentModule{}