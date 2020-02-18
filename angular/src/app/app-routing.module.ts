import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurityComponent } from './security/security.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [  
  { path: 'security', component: SecurityComponent },
  { path: '',   component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
