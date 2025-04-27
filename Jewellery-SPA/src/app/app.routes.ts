import { Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './Jewellery/home/home.component';
import { NewUserComponent } from './User/new-user/new-user.component';
import { ShoppingpageComponent } from './Jewellery/shoppingpage/shoppingpage.component';
export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component: LoginComponent}  ,
    {path:"newuser",component: NewUserComponent}  ,
    {path :"shopping",component :ShoppingpageComponent},

];
