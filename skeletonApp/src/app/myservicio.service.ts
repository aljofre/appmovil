import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyservicioService {

  private apiUrl = 'https://api.example.com/data'; // URL de ejemplo para una API

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get(this.apiUrl);
  }

}
