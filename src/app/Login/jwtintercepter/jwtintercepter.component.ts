import { Component, OnInit } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/Shared/Service/authentication.service';

@Component({
  selector: 'app-jwtintercepter',
  templateUrl: './jwtintercepter.component.html',
  styleUrls: ['./jwtintercepter.component.css']
})
export class JWTIntercepterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

       ngOnInit(): void {

        }
     

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
                     // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
          if (currentUser && currentUser.token) {
            request = request.clone({
                 setHeaders: { 
                     Authorization: `Bearer ${currentUser.token}`
               }
           });
        }

        return next.handle(request);
    }

}
