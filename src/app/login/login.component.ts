import { FlashMessagesService } from 'angular2-flash-messages';

import { ApiService } from './../api.service';
import { Component, OnInit, Input  } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  credentials = {
   'username': '',
    'password': '',
    'id': '',
    'DepartmentCode': '',
    'LoginName': '',
    'email': '',
    'PCName': ''

  };
  depatmentData;
  msg = 'Please fill in all fields';

  signup = false;
  login = true;
  showAlert = false;
  userAuth = false;
  user = '';

  constructor(private cs: ApiService,
    private flash_msg: FlashMessagesService

  ) {
  // get departments
    cs.departments().subscribe(data => {

      this.depatmentData = data['result'].sort((a, b) => a.DepartmentName < b.DepartmentName ? 1 : -1).slice(4);

    });
    console.log(
      this.depatmentData);
  }

  // get from data

  getFormData(e) {
    if ( this.credentials.password === '' || this.credentials.id === '') {
      this.showAlert = true;
      return;
    }
     this.cs.getLogin(this.credentials.id, this.credentials.password)
              .subscribe(data => {
                console.log(data);
                if (data['msg'] === 'passwords don\'t\ match' || data['msg'] === 'no user found') {
                this.msg = data['msg'];
                this.showAlert = true;
                } else {
                  this.login = false;
                  this.userAuth = true;
                  this.user = data['user'].UserName;
                  // save the token to storage
                     localStorage.setItem('token', data['token']);
                     localStorage.setItem('user', data['user'].UserName);
                     localStorage.setItem('user_id', data['user'].EmployeeID);


                }

              });
  }

  // remove warnig
  removeWarning() {
     this.showAlert = false;
  }


  // toggle signup/ login
  showSignup(a, b) {
    this.signup = a;
    this.login = b;

  }



  // sign up
  getSignupFormData() {
      this.cs.getSignup(this.credentials.username, this.credentials.PCName, this.credentials.email,
        this.credentials.password, this.credentials.LoginName, this.credentials.id, this.credentials.DepartmentCode
      )
           .subscribe(data => {
             console.log(data);
             if (data['msg'] === 'sorry user already exists!!! \n please check your email') {
              this.msg = data['msg'];
              this.showAlert = true;
              return;
              } else {
                 this.signup = false;
                 this.login = true;
                 this.flash_msg.show('Thanks for registering for Intranet , plz click  login to continue'
                 , {cssClass: 'alert-success', timeout: 4000});
              }

           });

  }

  // get logged out event
  logged_out(e) {
    console.log(e);
    this.userAuth = false;
    this.login = true;
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
                 this.login = false;
                  this.userAuth = true;
     this.user = localStorage.getItem('user');
    }

  }

}
