import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = ''; // Initialize username
  password: string = '';

constructor(private r:Router){

}

login(){
  if(this.username === 'ram' && this.password ==='123'){
    this.r.navigate(['/home']);
  }else{
    alert("invalid credential");
    this.r.navigate(['/login']);

  }
}
}
