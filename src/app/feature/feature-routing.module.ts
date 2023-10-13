import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TaskviewComponent } from './components/taskview/taskview.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { AuthguardGuard } from '../core/guards/authguard/authguard.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users', component: DashboardComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path: 'taskview', component: TaskviewComponent,
    canActivate:[AuthguardGuard]
  },
  {
    path: 'taskboard', component: TaskboardComponent,
    canActivate:[AuthguardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
