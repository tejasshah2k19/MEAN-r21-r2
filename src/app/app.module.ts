import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { MenuComponent } from './menu/menu.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ToastrModule } from 'ngx-toastr';
import { AddEmployeeReactiveComponent } from './add-employee-reactive/add-employee-reactive.component';
import { LoginFacultyComponent } from './login-faculty/login-faculty.component';
import { SignupFacultyComponent } from './signup-faculty/signup-faculty.component';
import { FulltimeDashboardComponent } from './fulltime-dashboard/fulltime-dashboard.component';
import { ParttimeDashboardComponent } from './parttime-dashboard/parttime-dashboard.component';
import { UserDataService } from './user-data.service';
import { LogoutFacultyComponent } from './logout-faculty/logout-faculty.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SqrPipe } from './sqr.pipe';
import { TokenInterceptor } from './token.interceptor';
 @NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SignupComponent,
    LoginComponent,
    UserListComponent,
    MenuComponent,
    AddProductComponent,
    ListProductsComponent,
    AddStudentComponent,
    ListStudentComponent,
    EditStudentComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    AddEmployeeReactiveComponent,
    LoginFacultyComponent,
    SignupFacultyComponent,
    FulltimeDashboardComponent,
    ParttimeDashboardComponent,
    LogoutFacultyComponent,
    PipeDemoComponent,
    SqrPipe   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
