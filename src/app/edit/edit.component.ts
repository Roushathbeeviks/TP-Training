import { Component, OnInit } from '@angular/core';
import {EmployeeservieService} from '../employeeservie.service'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private empservice:EmployeeservieService , private toast:ToastrService,private routes: Router, private route:ActivatedRoute) { }
    data= {

      firstname:"",
       lastname:"",
       age:null,
       phone:null
     } 

     id:any

     ngOnInit(): void {
       this.id=this.route.snapshot.paramMap.get('id')
       console.log(this.id)
       if(this.id){
       this.empservice.getEmployeesbyid(this.id).subscribe((res:any)=>{
       console.log(res)
       this.data=res
       
       })
     }
   
     }
   
   
     onSubmit(form:NgForm){
   
       if(this.id){
         this.empservice.editEmployeesbyid(this.id,this.data).subscribe((res:any)=>
         {
            this.routes.navigate(['/home'])
           console.log(res)
         })
         
       
       }
   
       else
       {
       this.empservice.postEmployees(this.data).subscribe((res:any)=>
       {
         console.log(res)
         if(this.data!=null)
         this.toast.success("succesfully added","success")
         this.routes.navigate(['/home'])
         
         
     })
       
     }
   }
   
   }
   
