import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/services/auth.guard';

const home : Routes = [
    { path : 'home', component : HomeComponent, data : { animation : 'home'}}
];

@NgModule({
    imports : [ RouterModule.forChild(home)],
    exports : [RouterModule]
})

export class HomeRoutingModule{}
