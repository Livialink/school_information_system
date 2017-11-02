import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard} from '../core/services/auth.guard';
import { AdminDashboardComponent } from './admin/admin.component';
import { StudentDashboardComponent } from './regstudent/regstudent.component';

const routes : Routes = [
    { path : 'admin/dashboard', component : AdminDashboardComponent/*, canActivate : [AuthGuard] */},
    { path : 'student/dashboard', component : StudentDashboardComponent/* ,canActivate : [AuthGuard]*/},
    
]

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class DashboardRoutingModule{

}