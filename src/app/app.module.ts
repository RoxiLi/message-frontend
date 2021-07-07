import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { UserComponent } from './modules/user/user.component';
import {UserService} from "./services/user.service";
import { MessageComponent } from './modules/message/message.component';
import {MessageService} from "./services/message.service";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UserComponent,
    MessageComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      MatSnackBarModule,
      BrowserAnimationsModule,
    ],
  providers: [
    UserService,MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
