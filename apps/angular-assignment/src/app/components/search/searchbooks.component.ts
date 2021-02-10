/* eslint-disable @typescript-eslint/ban-types */
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BookDetails } from '../../book.model';

@Component({
  selector: 'pkglobal-products',
  templateUrl: 'searchbooks.component.html',
})
export class SearchBooksComponent {
  books: BookDetails[];
  constructor(public dataService: DataService) {}

  searchInputChange(searchTerm): void {
    this.dataService.filterBooks(searchTerm).subscribe((response) => {
      this.books = response['items'];
    });
  }
}

