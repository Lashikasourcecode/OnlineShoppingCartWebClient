import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Shared/Service/authentication.service';
import { AlertService } from 'src/app/Shared/Service/alert-service';

@Component({
  selector: 'app-auth-user-login',
  templateUrl: './auth-user-login.component.html',
  styleUrls: ['./auth-user-login.component.css']
})
export class AuthUserLoginComponent implements OnInit {

  

  loginForm: FormGroup;
   // loading = false;
    submitted = false;
    returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
       
         ) {
    // redirect to home if already logged in
        //currentUserValue
        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
          
        }
     }

  ngOnInit(): void { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
   });

  // get return url from route parameters or default to '/'
  //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/product-detail-list';
  }

  /////

  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      } 

     // this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.router.navigate(['/checkoutitem']);
              },
              error => {
                  this.alertService.error(error);
                  //this.loading = false;
              });

  }


}
