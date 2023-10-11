import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginOneComponent } from './components/login-one/login-one.component';

const routes: Routes = [
  {
    path:'loginOne',
    component: LoginOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
