import { Component } from '@angular/core';
import {CaptchaService} from "../../Services/captcha.service";

@Component({
  selector: 'app-app-captcha',
  templateUrl: './app-captcha.component.html',
  styleUrls: ['./app-captcha.component.scss'],
})
export class AppCaptchaComponent {
  constructor(private captchaService: CaptchaService) {
  }

  ngOnInit() {
    this.captchaService.generateCaptcha().subscribe((data: any) => {
      console.log(data)
    });
  }

  grid: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  rules: string[][] = [
    ['', '=', ''],
    ['x', '', ''],
    ['', '=', '']
  ];

  toggleCell(i: number, j: number) {
    if (this.grid[i][j] === '') {
      this.grid[i][j] = '☀️'; // Sun
    } else if (this.grid[i][j] === '☀️') {
      this.grid[i][j] = '🌙'; // Moon
    } else {
      this.grid[i][j] = ''; // Empty
    }
  }

  isValidGrid(): boolean {
    // Validation logic for no more than 2 adjacent suns or moons
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (!this.validateCell(i, j)) {
          return false;
        }
      }
    }
    return true;
  }

  validateCell(i: number, j: number): boolean {
    // Check adjacency rules
    const adjacent = [
      [i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]
    ];
    let sunCount = 0, moonCount = 0;

    adjacent.forEach(([x, y]) => {
      if (this.grid[x]?.[y] === '☀️') sunCount++;
      if (this.grid[x]?.[y] === '🌙') moonCount++;
    });

    if (sunCount > 2 || moonCount > 2) return false;

    // Check rules
    const rule = this.rules[i][j];
    if (rule === 'x' && this.grid[i][j] === this.grid[i][j + 1]) return false;
    if (rule === '=' && this.grid[i][j] !== this.grid[i][j + 1]) return false;

    return true;
  }

  submitGrid() {
    if (this.isValidGrid()) {
      console.log('CAPTCHA Passed!');
    } else {
      console.log('Invalid Configuration');
    }
  }
}

