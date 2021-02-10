import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BookDetails } from '../../book.model';

@Component({
  templateUrl: 'mycart.component.html',
})
export class MyCartComponent implements OnInit {
  books: BookDetails[];
  isDelete: boolean;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.cartItems.subscribe((data) => {
      this.books = data;
    });
  }
}
