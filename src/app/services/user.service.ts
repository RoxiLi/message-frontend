import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { User} from '../models/user.model';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { HttpHeaders, HttpResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // baseUrl: string = environment.baseUrl;
  // commonUrl: string;
  API_URI = 'http://localhost:3000/user';


  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      Allow: "GET, POST, HEAD",
    }),
  };

  constructor(private http: HttpClient) {
    // this.commonUrl = this.baseUrl + "user";
  }

  getUserByName( name: string): Observable<User[]> {
    return this.http
      .get<User[]>(
        this.API_URI +'?name='+ name, this.httpOptions
        // @ts-ignore
      ).pipe(map((data) => data.body));
  }
}
