import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Book } from '../../book.model';

@Component({
  selector: 'pkglobal-books',
  templateUrl: 'books.component.html',
})
export class BooksComponent {
  @Input() books: Book;
  @Input() type: string;
  @Input() isDelete: boolean;

  constructor(public dataService: DataService) {}

  trackByMethod(el): string {
    return el['id'];
  }
  viewBook(book): void {
    this.dataService.getBook(book.id).subscribe((response) => {
      this.dataService.setBookData(response);
    });
  }

  deleteCartItem(book): void {
    this.dataService.removeBookFromCart(book);
  }
}
