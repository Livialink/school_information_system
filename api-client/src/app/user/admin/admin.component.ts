import { Component, OnInit} from '@angular/core';
import { IUpdateStudent } from '../../shared/interfaces';
import { schoolService } from '../../core/services/school.service';
import { StudentService } from '../../core/services/student.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
    selector : 'dashboard-admin',
    templateUrl : 'admin.component.html',
    providers : [schoolService,StudentService]

})

export class AdminDashboardComponent {}
    