import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardComponent } from './admin/admin.component';
import { DashboardRoutingModule  } from './dashboard-routing.module';
import { StudentDashboardComponent } from './regstudent/regstudent.component';

@NgModule({
    imports : [
        SharedModule,
        DashboardRoutingModule
    ],
    declarations : [
        AdminDashboardComponent,
        StudentDashboardComponent
    ]

})

export class DashboardModule{}