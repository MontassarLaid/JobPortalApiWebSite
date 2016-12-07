import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import {LocationStrategy, HashLocationStrategy } from '@angular/common';
import {Ng2PaginationModule} from 'ng2-pagination';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JobService } from './job.service';
import { JobsComponent } from './jobs/jobs.component';
import { SearchComponent } from './search/search.component';
import { CategoryService } from './category.service';
import { DetailComponent } from './detail/detail.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { AccountService } from './account.service';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    SearchComponent,
    DetailComponent,
    AccountComponent,
    LoginComponent,
    AddJobComponent,
    EditJobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PaginationModule,
    ReactiveFormsModule
  ],
  providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy},
      JobService,
      CategoryService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
