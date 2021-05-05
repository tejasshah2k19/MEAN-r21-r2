import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { InputComponent } from './input/input.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [

  {path:"input",component:InputComponent},
  {path:"signup",component:SignupComponent},
  {path:"userlist",component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
