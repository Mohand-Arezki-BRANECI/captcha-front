import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCaptchaComponent } from './app-captcha.component';

describe('AppCaptchaComponent', () => {
  let component: AppCaptchaComponent;
  let fixture: ComponentFixture<AppCaptchaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCaptchaComponent]
    });
    fixture = TestBed.createComponent(AppCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
