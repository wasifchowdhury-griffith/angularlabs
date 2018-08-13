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
    } else {
      alert('Username and password were incorrect');
    }
  }
}
