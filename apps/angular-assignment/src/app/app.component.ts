import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'pkglobal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular10sample';
  booksLength: number;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
    this.dataService.cartItems.subscribe((data) => {
      this.booksLength = data.length;
    });
  }
}
