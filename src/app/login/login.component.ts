import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName : string = '';
  password: string = '';


  constructor(private router : Router) { }
loginClicked(){ 
  // if(this.userName === 'admin' && this.password ==='admin'){
    if(this.userName=== this.password){
    alert("PLEASE ENTER YOUR NAME");
    
  }
   else{
    alert("WELCOME " + this.userName);
    this.router.navigateByUrl('/items');
   }

}
aboutClicked(){
  this.router.navigateByUrl('/about');
}
contactClicked(){
  this.router.navigateByUrl('/contact');
}
  ngOnInit(): void {
  }

}
