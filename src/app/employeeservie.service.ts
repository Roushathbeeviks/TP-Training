import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservieService {

  constructor(private httpclient:HttpClient) { }

  getEmployees(){
    return this.httpclient.get<any>('http://localhost:3000/EmployeeList')
  }
  postEmployees(data:any){
    return this.httpclient.post<any>('http://localhost:3000/EmployeeList',data)
  }
  getEmployeesbyid(id:any){
    return this.httpclient.get<any>(`http://localhost:3000/EmployeeList/${id}`)
  }
  editEmployeesbyid(id:any, data:any){
    return this.httpclient.put<any>(`http://localhost:3000/EmployeeList/${id}`, data);
  }
  deleteEmployeesbyid(id:any){
     return this.httpclient.delete<any>(`http://localhost:3000/EmployeeList/${id}`)
 }
  
}
