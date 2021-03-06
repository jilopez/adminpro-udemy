import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Rutas */
import { APP_ROUTES } from './app-routing.module';

//Modulos
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
