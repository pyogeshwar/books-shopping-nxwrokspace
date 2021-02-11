import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { BooksComponent } from '../books/books.component';

import { SearchBooksComponent } from './searchbooks.component';
import { of } from 'rxjs';

describe('BooksComponent', () => {
  let component: SearchBooksComponent;
  let fixture: ComponentFixture<SearchBooksComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, MaterialModule],
      declarations: [SearchBooksComponent, BooksComponent],
      providers: [DataService],
    }).compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(SearchBooksComponent);
    component = fixture.componentInstance;
  });

  describe('when calling searchInputChange', () => {
    beforeEach(async () => {
      spyOn(component.dataService, 'filterBooks').and.returnValue({
        subscribe: () => ({}),
      });
      component.searchInputChange('');
    });

    it('should call filterBooks and return list of books', fakeAsync(() => {
      expect(component.dataService.filterBooks).toHaveBeenCalledWith('');
    }));

    it('should return the book items', fakeAsync((books) => {
      component.dataService.filterBooks = () => of(books);
      component.searchInputChange('');
      component.dataService.filterBooks('').subscribe((res) => {
        expect(res).toEqual(books);
      });
    }));
  });
});
