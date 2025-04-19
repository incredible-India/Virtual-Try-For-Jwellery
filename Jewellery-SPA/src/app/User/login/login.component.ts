import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserClient } from '../../Services/userclient';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isError :boolean =  false;
  errText:string ="";
  user = {
    email : '',
    password:""
  }
  constructor(private http: HttpClient,private userClient:UserClient) {

    
  }

  Login() {
    console.log("userlogin comp : ",this.user)
    this.userClient.loginUser(this.user).subscribe({
      error : err=>{
        console.log(err)
        this.isError =true;
        if (err.status === 404) {
          this.errText =  'Invalid credentials'

        }  else {
          this.errText = 'Server Error: Try again later'
        }
      }
      ,next: res => {
        localStorage.setItem('token', res.token);
        this.isError = false;
      }
    })
  }
}
