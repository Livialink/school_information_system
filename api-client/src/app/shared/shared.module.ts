import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    exports : [BrowserModule,FormsModule],
    imports : [BrowserModule,FormsModule]
})

export class SharedModule{}