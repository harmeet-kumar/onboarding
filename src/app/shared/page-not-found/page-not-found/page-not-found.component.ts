import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router,private authService: AuthenticationService) { }

  ngOnInit() {
  }

  redirectToApp() {
    const currentUser = this.authService.getCurrentUser();
    if(currentUser) {
      this.router.navigateByUrl('onboarding/list');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}
