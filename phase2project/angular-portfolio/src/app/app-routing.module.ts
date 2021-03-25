import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"\login",component:LoginComponent},
{path:"\sign-up",component:SignUpComponent},
{path:"\my-portfolio",component:MyPortfolioComponent},
{path:"",redirectTo:"\sign-up",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
