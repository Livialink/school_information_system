import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './account/account.module';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { PageNotFoundComponent } from './not-found.component';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/services/auth.guard';
import { HomeModule } from './home/home.module';
import { StudentModule } from './student/student.module';
import { ContentModule } from './content/content.module';
import { DashboardModule } from './user/dashboard.module';
import { SharedModule } from './shared/shared.module';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
   // AccountComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    HttpModule,
    HomeModule,
    DashboardModule,
    ContentModule,
    StudentModule,
    AccountModule,
    AppRoutingModule,
  ],
  schemas :[NO_ERRORS_SCHEMA],
  providers: [
    AuthService,
    AuthGuard
 //   { provide : MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue : {float : 'auto'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
