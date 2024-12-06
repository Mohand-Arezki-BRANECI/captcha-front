import { Component } from '@angular/core';
import {CaptchaService} from "./Services/captcha.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'captcha-frontend';

  constructor(private captchaService: CaptchaService) {
  }

  ngOnInit() {
    this.captchaService.generateCaptcha().subscribe((data: any) => {
      console.log(data)
    });
  }
}
