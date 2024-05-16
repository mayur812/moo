import { Component } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent  {
  hide = true;
   user={
    username:'',
    password:'',
    name:'',
    email:'',
    phone:''
  };


  formSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.user);
  }
}
