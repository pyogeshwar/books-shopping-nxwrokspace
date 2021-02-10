import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { user } from '../../user';

@Component({
  selector: 'pkglobal-root',
  templateUrl: 'myorders.component.html',
})
export class MyOrdersComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  books: any = [];
  user: user;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.getUserData();
    this.books = this.dataService.getDataFromLocalStorage();
  }
  getUserData(): void {
    this.dataService.userData.subscribe((data) => {
      this.user = data;
    });
  }
  
}
