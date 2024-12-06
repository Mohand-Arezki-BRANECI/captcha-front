import { Component } from '@angular/core';
import {CaptchaService} from "../../Services/captcha.service";

@Component({
  selector: 'app-app-captcha',
  templateUrl: './app-captcha.component.html',
  styleUrls: ['./app-captcha.component.scss'],
})
export class AppCaptchaComponent {

  message: string = '';
  success: boolean = false;
  constructor(private captchaService: CaptchaService) {
  }

  grid: string[][] = [
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],

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

  // Convert grid to a list of 0's (Moon) and 1's (Sun)
  convertGridToList(): number[] {
    const gridList: number[] = [];
    for (let row of this.grid) {
      for (let cell of row) {
        if (cell === '☀️') {
          gridList.push(1); // Sun is 1
        } else if (cell === '🌙') {
          gridList.push(0); // Moon is 0
        } else {
          gridList.push(-1); // Empty cell, could handle as needed (like `-1` or `null`)
        }
      }
    }
    return gridList;
  }

  // Submit grid to backend
  submitGrid() {
    console.log('Button clicked!');
    const gridList = this.convertGridToList();
    console.log('Grid as List:', gridList);


    // Call captcha service to send the grid data to the backend
    this.captchaService.submitGridData(gridList).subscribe(
      (response) => {
        console.log('Grid submitted successfully:', response);
        this.success = response.success;
        this.message = response.message;
      },
      (error) => {
        this.success = false;
        this.message = 'An error occurred while submitting the grid.';
        console.error(error);
      }
    );
  }


}

