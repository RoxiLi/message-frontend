import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import {Message} from "../models/message.model";
import { Observable, of, throwError } from "rxjs";
import {map} from 'rxjs/operators';
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})
export class MessageService {
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
    this.commonUrl = this.API_URI + "/message";

  }
  getMessagesByUser( idUser: string): Observable<Message[]> {
    return this.http
      .get<Message[]>(
        this.commonUrl + '?user='+idUser, this.httpOptions
        // @ts-ignore
      ).pipe(map((data) => data.body));
  }

  saveMessage(message : Message): Observable<Message>{
    return this.http.post<Message>(this.commonUrl, message
      , this.httpOptions )
      // @ts-ignore
      .pipe(map((data) => data.body));
  }
}
