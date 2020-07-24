import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{RegistrationComponent} from'../app/registration/registration.component';
import{UserloginComponent} from'../app/Login/userlogin/userlogin.component';
import { from } from 'rxjs';



const routes: Routes = [
  {path:'registration', component:RegistrationComponent},
  {path:'userlogin',component:UserloginComponent},
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[RegistrationComponent,UserloginComponent]




