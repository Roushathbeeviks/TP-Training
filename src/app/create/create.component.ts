import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {EmployeeservieService} from '../employeeservie.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {




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


  onSubmit( form:NgForm){
    //check whether there is an id along with the url, if so moves to edit (if loop),if not move to create(else loop)
    if(this.id){
      this.empservice.editEmployeesbyid(this.id,this.data).subscribe((res:any)=>
      {
         this.routes.navigate(['/'])
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
      this.routes.navigate(['/'])
     
      
      
  })
    
  }
}

}
