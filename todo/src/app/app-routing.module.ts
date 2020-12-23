import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModelComponent } from './forms/ng-model/ng-model.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
  { path: 'forms', component: NgModelComponent, canActivate: [AuthGuard] },
  {
    path: 'forms/reactive',
    component: ReactiveComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
