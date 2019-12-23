import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro.component';
import { NopagefoundComponent } from './share/nopagefound/nopagefound.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent},
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );



