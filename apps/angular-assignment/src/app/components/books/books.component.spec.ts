import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';

import { BooksComponent } from './books.component';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, MaterialModule],
      declarations: [BooksComponent],
      providers: [DataService],
    }).compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
  });

  describe('when calling viewBook', () => {
    beforeEach(async () => {
      spyOn(component.dataService, 'getBook').and.returnValue({
        subscribe: () => ({}),
      });
      spyOn(component.dataService, 'setBookData').and.callThrough();
      component.dataService.setBookData({});
      component.viewBook({});
    });

    it('should call getBook and return the book', fakeAsync(() => {
      expect(component.dataService.getBook).toHaveBeenCalled();
    }));
    it('should call setBookData and return the book', () => {
      expect(component.dataService.setBookData).toHaveBeenCalledWith({});
    });
  });

  describe('when calling deleteCartItem', () => {
    beforeEach(async () => {
      spyOn(component.dataService, 'removeBookFromCart').and.stub();
      component.deleteCartItem({});
    });
    it('should call removeBookFromCart', () => {
      expect(component.dataService.removeBookFromCart).toHaveBeenCalledWith({});
    });
  });
  describe('when calling trackByMethod', () => {
    it('should return the book id', () => {
      const obj = { id: 1 };
      expect(component.trackByMethod(obj)).toEqual(1);
    });
  });
});
