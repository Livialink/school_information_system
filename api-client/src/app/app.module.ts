import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './account/account.module';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { PageNotFoundComponent } from './not-found.component';
import { AuthService } from './core/services/auth.service'
import { HomeModule } from './home/home.module';
import { StudentModule } from './student/student.module';
import { ContentModule } from './content/content.module';
//import { AuthGuard } from './core/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
   // AccountComponent,
    PageNotFoundComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    ContentModule,
    StudentModule,
    AccountModule,
    AppRoutingModule
  ],
  schemas :[NO_ERRORS_SCHEMA],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
