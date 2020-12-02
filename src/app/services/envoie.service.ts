import { Envoie } from './../models/envoie';
import {  Observable, throwError } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnvoieService {

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json'

    })

  }

  constructor(private http: HttpClient) { }

  getEnvoies(): Observable<any> {
    return this.http.get<Envoie[]>(`${environment.apiUrl}/api/envoies`);
  }

 /* postEnvoie(data): Observable<any>{
    console.log(environment.apiUrl);
    return this.http.post<Envoie[]>(`${environment.apiUrl}/api/envoie`,data);
  }*/

  postEnvoie(envoie): Observable<Envoie> {
    return this.http.post<Envoie>(`${environment.apiUrl}/api/envoie`, JSON.stringify(envoie), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  errorHandler(error) {

    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;

    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    return throwError(errorMessage);

 }
}
