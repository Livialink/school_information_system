import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    exports : [FormsModule,BrowserModule]
})

export class SharedModule{}