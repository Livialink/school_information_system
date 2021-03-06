import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports : [
        AccountRoutingModule,
        SharedModule,
    ],
    declarations : [
        AccountComponent
    ]
})

export class AccountModule{ 
}