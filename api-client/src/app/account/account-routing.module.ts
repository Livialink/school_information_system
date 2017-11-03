import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const routes : Routes = [
    { path : 'login', component : AccountComponent, data : { animation : 'login'} },
    { path : 'logout',component : AccountComponent, data : { animation : 'logout'}}
];

@NgModule({
    imports : [ RouterModule.forChild(routes)],
    exports : [ RouterModule]
})

export class AccountRoutingModule {
   // static component = [AccountComponent]
}

