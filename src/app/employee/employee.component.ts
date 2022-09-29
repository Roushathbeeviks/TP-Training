import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {EmployeeservieService} from '../employeeservie.service'


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


  constructor(
    private routes:Router, private empservice:EmployeeservieService, private toast:ToastrService)
   { }
   employeeArray:any=[]
  //  index = [ "firstName", "lastName", "age", "phone"];
  isDesc:boolean=true;
  orderheader:string= '' ;

  ngOnInit() : void{
    
    this.empservice.getEmployees().subscribe((res)=>
    {
      console.log(res)
      this.employeeArray=res;
    })
  }
    
  navigate(){
    this.routes.navigate(['/create'])
  }
  navigatetodelete(id:any){
   

    
     this.empservice.deleteEmployeesbyid(id).subscribe((res)=>
     {
      //  console.log(res)
      // this.employeeArray=res
      this.toast.success("Successfully deleted", "deleted")
      this.ngOnInit();
   })

  }
  sort(header:string) {
    this.isDesc=!this.isDesc;
    this.orderheader=header;  //sort by the id or name or gender

  }
  
  }


 



