import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from "./modules/user/user.component";
import {MessageComponent} from "./modules/message/message.component";


const routes: Routes = [
  {
    path:'',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'message',
    component: MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
