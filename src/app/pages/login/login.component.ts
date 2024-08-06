import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
 loginObj:Login
 constructor(private http:HttpClient) {
  this.loginObj = new Login();
 }

 onLogin() {
  
  this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.loginObj).subscribe((res:any) => {

    alert("Login Successfull")
  
  })
 }

}

export class Login {
  emailId:string;
  password:string;
  constructor () {
    this.emailId = ""
    this.password = ""
  }
}