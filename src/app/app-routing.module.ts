import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {CreateComponent} from './create/create.component';
import {ViewComponent} from './view/view.component'


const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full'}, 
{path:'create', component:CreateComponent},
{path:'home', component:EmployeeComponent},
{path:'edit/:id', component:CreateComponent},
{path:'view/:id', component:ViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
