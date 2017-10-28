import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from  './account/account.component';
import { PageNotFoundComponent } from './not-found.component';

const app_routes : Routes = [   
  { path : '', pathMatch : 'full', redirectTo : '/home'},
  { path : '**', component : PageNotFoundComponent }
];

@NgModule({
    imports : [
        RouterModule.forRoot(app_routes)
    ],
    exports : [ RouterModule]
})

export class AppRoutingModule{}

