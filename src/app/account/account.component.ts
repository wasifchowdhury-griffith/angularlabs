import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $("#userid").html("User ID: " + localStorage.getItem("userid"));
    $("#username").html("Username: " + localStorage.getItem("username"));
    $("#birthdate").html("Birthdate: " + localStorage.getItem("birthdate"));
    $("#age").html("Age: " + localStorage.getItem("age"));
    this.router.navigateByUrl('/account');
  }

  logoutUser() {
    localStorage.setItem("userid", "");
    localStorage.setItem("username", "");
    localStorage.setItem("birthdate", "");
    localStorage.setItem("age", "");
    this.router.navigateByUrl('/login');
  }

}
