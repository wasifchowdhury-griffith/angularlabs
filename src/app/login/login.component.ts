import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';

  constructor(private router:Router,private form:FormsModule) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    if (this.username == "wasif" && this.password == "123"){
      this.router.navigateByUrl('/account');
      this.saveUser();
    } else {
      alert('Username and password were incorrect');
    }
  }

  saveUser() {
    if (typeof(Storage) !=="undefined") {
      console.log('storage ready');
      localStorage.setItem("userid", "1");
      localStorage.setItem("username", "wasif");
      localStorage.setItem("birthdate", "16/05/1996");
      localStorage.setItem("age", "22");
    }
  }

  logoutUser() {
    localStorage.setItem("userid", "");
    localStorage.setItem("username", "");
    localStorage.setItem("birthdate", "");
    localStorage.setItem("age", "");
    this.router.navigateByUrl('/login');
  }
}
