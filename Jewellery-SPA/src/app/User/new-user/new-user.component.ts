import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserClient } from '../../Services/userclient';
@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  isError :boolean =  false;
  errText:string ="";
  user = {
    name : '',
    password:"",
    email :"",
    mobile:""
  }


  constructor(private userClient:UserClient) {

    
  }


  newUserForm(){
    this.userClient.newUser(this.user).subscribe({
      error : err=>{
        console.log(err)
        this.isError =true;
        this.errText = err["error"].error
        
      }
      ,next: res => {
        localStorage.setItem('token', res.token);
        this.isError =false;
      }
    })
  }
}
