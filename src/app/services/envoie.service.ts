import { Envoie } from './../models/envoie';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvoieService {

  constructor(private http: HttpClient) { }

  getEnvoies(): Observable<any> {
    return this.http.get<Envoie[]>(`${environment.apiUrl}/api/envoies`);
  }

  postEnvoie(data): Observable<any>{
    console.log(environment.apiUrl);
    return this.http.post<Envoie[]>(`${environment.apiUrl}/api/envoie`,data);
  }
}
