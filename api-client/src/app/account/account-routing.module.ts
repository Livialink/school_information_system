import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const routes : Routes = [
    { path : 'login', component : AccountComponent, data : { animation : 'login'} },
    /*{ path : 'account', pathMatch : 'full', redirectTo : '/login'}*/
];

@NgModule({
    imports : [ RouterModule.forChild(routes)],
    exports : [ RouterModule]
})

export class AccountRoutingModule {
   // static component = [AccountComponent]
}

