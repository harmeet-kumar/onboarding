import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router, private authenticationService: AuthenticationService) { 
    }

    title = 'kratos';
    public username: string;
    public loggedIn: boolean = true;
    
    // userSubscription = this.authenticationService.username.subscribe(val => {
    //   this.username = val
    //   if(val) {
    //     this.loggedIn = true;
    //   } else {
    //     this.loggedIn = false;
    //   }
    // });
    
    ngOnInit() {
    }   

    logOut() {
      this.authenticationService.logout();
    }
}
