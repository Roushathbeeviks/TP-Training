import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
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


  onSubmit(){

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
