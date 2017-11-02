import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { HomeRoutingModule} from './home-routing.module';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/services/auth.guard';

@NgModule({
    imports : [
        SharedModule,
        HomeRoutingModule,        
    ],
    declarations : [ HomeComponent],
   // providers : [AuthGuard]
})

export class HomeModule{}