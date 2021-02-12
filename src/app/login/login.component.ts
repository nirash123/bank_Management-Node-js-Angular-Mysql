import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KongService } from '../kong.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl(''),
  });

  data:any;
  email:string="";
  constructor(public router:Router,
    public kongService:KongService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log();
    this.email=this.formLogin.value['email'];
    this.kongService.getKongEmail(this.formLogin.value['email']).subscribe(data=>{this.data=data
      console.log(data);
      if(data!=null){
        this.router.navigate([`list/${this.email}`]);
      }
        
    });

    
    

  }

}
