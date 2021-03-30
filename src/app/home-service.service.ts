import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient) { }

  getService() {
    return this.http.get('http://localhost:3000/images');
  }
}
