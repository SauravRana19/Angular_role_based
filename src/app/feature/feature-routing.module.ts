import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskviewComponent } from './components/taskview/taskview.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { AuthguardGuard } from '../core/guards/authguard/authguard.guard';
import { ViewerComponent } from './components/viewer/viewer.component';
import { usersComponent } from './components/userdetails/users.Component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: usersComponent,
    canActivate: [AuthguardGuard],
    data : { role : ['superadmin','admin','user']}
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardGuard],
     data : { role : ['superadmin','admin']}
  },
  {
    path: 'taskview',
    component: TaskviewComponent,
    canActivate: [AuthguardGuard],
    data : { role : ['superadmin','admin','user']}
  },
  {
    path: 'taskboard',
    component: TaskboardComponent,
    canActivate: [AuthguardGuard],
    data : { role : ['superadmin','admin','user','viewer']}
  },
  {
    path: 'viewer',
    component: ViewerComponent,
    canActivate: [AuthguardGuard],
    data : { role : ['superadmin','admin','user','viewer']}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
