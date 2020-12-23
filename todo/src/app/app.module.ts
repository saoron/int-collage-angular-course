import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { JwtInterceptor } from './interceptors/auth.interceptor';
import { NgModelComponent } from './forms/ng-model/ng-model.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AddCommaPipe } from './pipes/add-comma.pipe';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    TodoComponent,
    NgModelComponent,
    ReactiveComponent,
    AddCommaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
