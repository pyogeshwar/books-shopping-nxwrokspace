import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Book, BookDetails } from '../book.model';
import { user } from '../user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http: HttpClient;
  private googleKey = 'AIzaSyDMxXcC5NUaWsKcHjaEpg1uH6H_ftpXEfo';
  private BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

  public bookData = new BehaviorSubject<BookDetails>(null);
  public bookData$ = this.bookData.asObservable();

  cartItems: BehaviorSubject<Book[]> = new BehaviorSubject([]);
  array$: Observable<Book[]> = this.cartItems.asObservable();

  public userData: BehaviorSubject<user> = new BehaviorSubject<user>({});
  public userData$ = this.userData.asObservable();

  constructor(http: HttpClient) {
    this.http = http;
  }

  filterBooks(id: string): Observable<Book> {
    return this.http.get<Book>(this.BASE_URL + '?q=' + id);
  }
  getBook(id: string): Observable<BookDetails> {
    return this.http.get(this.BASE_URL + '/' + id + '?key=' + this.googleKey);
  }

  setBookData(res): void {
    this.bookData.next(res);
  }
  setUserDetails(userObj): void {
    this.userData.next(userObj);
  }
  updateCart(book): void {
    this.array$.pipe(take(1)).subscribe((val) => {
      const newArr = [...val, book];
      this.cartItems.next(newArr);
    });
  }
  removeBookFromCart(book): void {
    this.array$.pipe(take(1)).subscribe(() => {
      const arr = this.cartItems.getValue();

      const index = arr.findIndex((item) => item['id'] === book.id);
      arr.splice(index, 1);
      return this.cartItems.next(arr);
    });
  }

  saveDataToLocalStorage(book): void {
    let temp = [];
    const arr = JSON.parse(localStorage.getItem('cartItems'));
    if (arr) {
      temp = JSON.parse(localStorage.getItem('cartItems'));
      temp.push(book);
    } else {
      temp.push(book);
    }
    localStorage.setItem('cartItems', JSON.stringify(temp));
  }
  getDataFromLocalStorage(): unknown {
    return JSON.parse(localStorage.getItem('cartItems'));
  }
}
