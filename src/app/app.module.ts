import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PasswordModule} from 'primeng/password';
import { ErrorhandleInterceptor } from './core/interceptor/errorhandle_interceptor/errorhandle.interceptor';
import { RequestInterceptor } from './core/interceptor/request_interceptor/request.interceptor';
import { ResponseInterceptor } from './core/interceptor/response_interceptor/response.interceptor';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    PasswordModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorhandleInterceptor, multi:true
     },
     {
      provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi:true
     },
     {
      provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi:true
     }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
