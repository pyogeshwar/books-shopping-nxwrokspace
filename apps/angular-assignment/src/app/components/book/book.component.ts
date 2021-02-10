import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BookDetails } from '../../book.model';

@Component({
  templateUrl: 'book.component.html',
})
export class BookComponent {
  book: BookDetails;

  constructor(public dataService: DataService) {
    this.dataService.bookData$.subscribe((data) => (this.book = data));
  }

  addBookToCart(book): void {
    this.dataService.updateCart(book);
    this.dataService.saveDataToLocalStorage(book);
  }
  byNow(book): void {
    this.dataService.updateCart(book);
  }
}
