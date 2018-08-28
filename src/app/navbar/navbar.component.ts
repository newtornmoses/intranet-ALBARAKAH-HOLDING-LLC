import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

@Input()loggedinStatus;
 @Output()logoutStatus = new EventEmitter();
 hoverTrue = false;
  loggedIn;
  user = '';
  constructor(private route: Router) { }


  // hover listener

  show_ul() {
    this.hoverTrue = true;
  }



  // logout

  logout() {
    this.logoutStatus.emit('user logged out'); // send status to parent
    localStorage.clear(); // clear storage
    this.loggedIn = false;
    this.route.navigate(['/home']);
  }

  ngOnChanges() {
  this.loggedIn = this.loggedinStatus;
  if (localStorage.getItem('token')) {

    this.user = localStorage.getItem('user');
}
  console.log(this.loggedIn);
  }


  ngOnInit() {
  if (localStorage.getItem('token')) {
      this.loggedIn = true;

      this.user = localStorage.getItem('user');
}
  }

}
