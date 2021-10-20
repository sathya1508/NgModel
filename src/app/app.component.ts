import { Component, VERSION } from '@angular/core';

interface students {
  name: string;
  age: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  stu: students = { name: 'MATHEW', age: 15 };

  constructor() {
    //this.stu.name = 'MATHEW';
    ////this.stu.age = 15;
  }
  ngOnInit() {
    //this.stu.name = 'MATHEW';
    //this.stu.age = 15;
  }
}
