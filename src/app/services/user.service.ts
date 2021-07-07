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
  API_URI: string = environment.baseUrl;
  commonUrl: string;


  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Accept: "application/json",
      Allow: "GET, POST, HEAD",
    }),
  };

  constructor(private http: HttpClient) {
    this.commonUrl = this.API_URI + "/user";
  }

  getUserByName( name: string): Observable<User[]> {
    return this.http
      .get<User[]>(
        this.commonUrl +'?name='+ name, this.httpOptions
        // @ts-ignore
      ).pipe(map((data) => data.body));
  }
}
