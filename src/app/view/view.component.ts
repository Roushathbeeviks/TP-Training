import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeservieService } from '../employeeservie.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  data=
  {
    firstname:"",
       lastname:"",
       age:null,
       phone:null
  }

  employeeArray:any
  id:any

  constructor(private empserv: EmployeeservieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    console.log(this.id)
    this.empserv.getEmployeesbyid(this.id).subscribe((res:any)=>
    {
      console.log(res)
      this.data=res
    })
  }
  


}
