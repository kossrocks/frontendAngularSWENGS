import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:any;

  constructor(private http:HttpClient,private router:Router, private userService:UserService) { }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    }
  }
  login() {
    this.userService.login(this.user)
      .subscribe(()=>{

      },()=>{
        alert("false credentials");
      });
  }

}
