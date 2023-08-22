import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://api.shrtco.de/v2/shorten?url=';

@Injectable({
  providedIn: 'root'
})

export class UrlService {

  constructor(private http: HttpClient ) { }

  fetchShorterUrl(longUrl: string): Observable<any> {
    const url = apiUrl + longUrl;
    return this.http.get(url);
  }
}
