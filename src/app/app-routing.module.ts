import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountComponent} from './account/account.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ChatComponent} from './chat/chat.component';

const routes: Routes = [
{
	path:"chat",
	component:ChatComponent

},
{
	path:"profile",
	component:ProfileComponent

},


{

path:"login",
component:LoginComponent


},
{

path:"account",
component:AccountComponent


}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
