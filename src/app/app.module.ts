import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {AppRouting} from "./app-routing.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpHeaderInterceptor} from "./interceptors/http-header-interceptor.service";
import {HttpErrorsInterceptor} from "./interceptors/http-errors-interceptor";
import {HttpService} from "./services/http.service";
import {CredentialsService} from "./services/credentials.service";


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    AppRouting,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [AppRouting,HttpService,CredentialsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpHeaderInterceptor,
    multi: true},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true},

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
