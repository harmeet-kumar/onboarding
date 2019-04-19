import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {

   loginForm: FormGroup;
   submitted = false;
   returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
     this.loginForm = this.formBuilder.group({
       username: ['', Validators.required],
       password: ['', Validators.required]
   });
  }

  get formControls() { return this.loginForm.controls; }

  reset() {
    if(this.loginForm.controls.username.value != '') {
      this.loginForm.controls.username.setValue('');
    }
    if(this.loginForm.controls.password.value != '') {
      this.loginForm.controls.password.setValue('');
    }
  }

  onSubmit() {
     this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
 
    const user = this.authenticationService.login(this.formControls.username.value, this.formControls.password.value);
    
    this.router.navigate(['onboarding']);        
                
  }
}
