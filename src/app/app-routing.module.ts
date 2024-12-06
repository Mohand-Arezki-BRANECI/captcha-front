import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppCaptchaComponent} from "./Components/app-captcha/app-captcha.component";

const routes: Routes = [
  { path: '', redirectTo: 'app-captcha', pathMatch: 'full' },
  { path: 'app-captcha', component: AppCaptchaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
