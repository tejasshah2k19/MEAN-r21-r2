import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeReactiveComponent } from './add-employee-reactive/add-employee-reactive.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FulltimeDashboardComponent } from './fulltime-dashboard/fulltime-dashboard.component';
import { InputComponent } from './input/input.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginFacultyComponent } from './login-faculty/login-faculty.component';
import { LogoutFacultyComponent } from './logout-faculty/logout-faculty.component';
import { ParttimeDashboardComponent } from './parttime-dashboard/parttime-dashboard.component';
import { SignupFacultyComponent } from './signup-faculty/signup-faculty.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [

  {path:"input",component:InputComponent},
  {path:"signup",component:SignupComponent},
  {path:"userlist",component:UserListComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"listproducts",component:ListProductsComponent},
  {path:"addstudent",component:AddStudentComponent},
  {path:"liststudent",component:ListStudentComponent},
  {path:"editstudent/:email",component:EditStudentComponent},
  {path:"listemployee",component:ListEmployeeComponent},
  {path:"addemployee",component:AddEmployeeComponent},
  {path:"editemployee/:id",component:EditEmployeeComponent},
  {path:"addemployeereactive",component:AddEmployeeReactiveComponent},
  {path:"signupfaculty",component:SignupFacultyComponent},
  {path:"loginfaculty",component:LoginFacultyComponent},
  {path:"ftfaculty",component:FulltimeDashboardComponent},
  {path:"ptfaculty",component:ParttimeDashboardComponent},
  {path:"logout",component:LogoutFacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
