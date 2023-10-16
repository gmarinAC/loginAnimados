import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginOneComponent } from './components/login-one/login-one.component';
import { LoginTwoComponent } from './components/login-two/login-two.component';

const routes: Routes = [
  {
    path:'loginOne',
    component: LoginOneComponent
  },
  {
    path:'loginTwo',
    component: LoginTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
