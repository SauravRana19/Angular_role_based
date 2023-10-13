import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/components/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',  
    loadChildren: () => import('./auth/auth.module')  
    .then(m => m.AuthModule)
  },
  {
    path: 'main',  
    component: MainComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./feature/feature.module')  
        .then(m => m.FeatureModule)
      }
    ]
  },
  // {
  //   path: 'feature',  
  //   loadChildren: () => import('./feature/feature.module')  
  //   .then(m => m.FeatureModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
