import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  private apiUrl : string = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  generateCaptcha() {
    return this.http.get(`${this.apiUrl}/greet`);
  }

}
