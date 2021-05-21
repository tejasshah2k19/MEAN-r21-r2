import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { MenuComponent } from './menu/menu.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { HttpClientModule } from '@angular/common/http';
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
    ListEmployeeComponent   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
