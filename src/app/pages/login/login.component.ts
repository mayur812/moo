import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginData={
    username:'',
    password:''
  };
  hasSpecialChars(str:any) {
    const specialChars = '!@#$%^&*()_+\-=\[\]{};';
    for (let char of str) {
      if (specialChars.indexOf(char) !== -1) {
        return true;
      }
    }
    return false;
  }

  formSubmit(){
    if (this.loginData.username.trim() == '' || this.loginData.username == null) {
      this.snack.open("Invalid Username",'',{duration:3000});
      return
    }
    
    if (this.loginData.password.length < 8 || !this.hasSpecialChars(this.loginData.password)) {
      this.snack.open("Password does not follow the guidlines!",'Ok')
      return
    }
    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data);
      },
      (error) => {
        console.log(error)
      }
    );
    
  }
  constructor(private snack:MatSnackBar,public loginService:LoginService) { }

  ngOnInit() {
  }

}
