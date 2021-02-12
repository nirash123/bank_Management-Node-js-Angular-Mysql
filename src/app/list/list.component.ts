import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Kong } from '../kong';
import { KongService } from '../kong.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    kong: Kong=new Kong();
    bank_name:any;
    emp_name='';
    kong2:any;

  constructor(public kongService:KongService,
    private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const key=params.email;
      
  
    this.kongService.getKongEmail(key).subscribe(data=>{ 
      this.kong =data;
      this.kong2=data;
      console.log("data1:"+this.bank_name);
      console.log("data:"+JSON.stringify(data));
    });
    })

  }
}
