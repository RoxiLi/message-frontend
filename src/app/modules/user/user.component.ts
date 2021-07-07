import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from "../../models/user.model";
import {UserGlobalService} from "../../services/user-global.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userLog : User = {
    _id: '',
    name: ''
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar,
    private userGlobalService: UserGlobalService
  ) { }

  ngOnInit(): void {

  }

  login() {
    console.log(this.userLog.name)
    let userName = this.userLog.name;
    this.userService.getUserByName(userName)
      .subscribe(data => {
        if (!data.length){

        }else{
          this.openSesion(data);
        }


      })
  }
  openSesion(user: User[]) {
    let userLogin = user[0]
    this.userGlobalService.setUserGlobal(userLogin);
    this.router.navigate(['/message']);
    this.snackbar.open('Login exitoso', 'Información', {
      duration: 5000
    });
  }
}
