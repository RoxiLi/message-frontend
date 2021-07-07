import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import {Message} from "../models/message.model";
import { Observable, of, throwError } from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  API_URI = 'http://localhost:3000/message';

  constructor(private http: HttpClient) {

  }
  getMessagesByUser( idUser: string): Observable<Message[]> {
    return this.http
      .get<Message[]>(
        this.API_URI + '?user='+idUser
        // @ts-ignore
      ).pipe(map((data) => data.body));
  }

  saveMessage(message : Message): Observable<Message>{
    return this.http.post<Message>(this.API_URI, message)
      // @ts-ignore
      .pipe(map((data) => data.body));
  }
  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  private log(message: string) {
    console.log(message);
  }




}
