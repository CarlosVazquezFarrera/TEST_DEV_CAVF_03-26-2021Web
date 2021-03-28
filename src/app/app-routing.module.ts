import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { PersonaFisicaComponent } from './components/persona-fisica/persona-fisica.component'
import { LoggedguardGuard } from './guard/loggedguard.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'personaFisica', component: PersonaFisicaComponent, canActivate: [LoggedguardGuard]},
  {path:'**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
