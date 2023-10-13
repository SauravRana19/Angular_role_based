import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RedirectGuardGuard } from '../core/guards/redirectguard/redirect-guard.guard';


const routes: Routes = [
  {
    path: '', component: LoginComponent,
    canActivate:[RedirectGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
