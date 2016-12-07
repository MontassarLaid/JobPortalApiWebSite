import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {JobsComponent} from './jobs/jobs.component';
import {SearchComponent} from './search/search.component';
import {DetailComponent} from './detail/detail.component';
import {AccountComponent} from './account/account.component';
import {LoginComponent} from './login/login.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';



export const routing = RouterModule.forRoot([

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'detail/:Id',
    component: DetailComponent
  },
  {
    path: 'search/:keywords/:zone_job/:category_job',
    component: SearchComponent
  },
  {
    path: 'souscription',
    component: AccountComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add_job',
    component: AddJobComponent
  },
  {
    path: 'edit_job/:Id',
    component: EditJobComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

]);
