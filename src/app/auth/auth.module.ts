import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    ButtonModule,
    ImageModule,
    TooltipModule,
    
    
  ]
})
export class AuthModule { }
