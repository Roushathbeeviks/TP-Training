import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { OrderModule } from 'ngx-order-pipe';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CreateComponent,
    ViewComponent,
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    OrderModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
