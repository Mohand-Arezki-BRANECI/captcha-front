import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8080/submitGrid';  // Replace with your backend API endpoint

  // Method to submit the grid data
  submitGridData(gridList: number[]): Observable<any> {
    return this.http.post<any>(this.apiUrl, { gridList });
  }
}
