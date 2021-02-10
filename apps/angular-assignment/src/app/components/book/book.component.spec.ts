import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, MaterialModule],
      declarations: [BookComponent],
      providers: [DataService],
    }).compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
  });

  describe('when calling addBookToCart', () => {
    beforeEach(async () => {
      spyOn(component.dataService, 'updateCart').and.stub();
      spyOn(component.dataService, 'saveDataToLocalStorage').and.stub();
      component.addBookToCart({});
    });
    it('should call updateCart', () => {
      expect(component.dataService.updateCart).toHaveBeenCalledWith({});
    });
    it('should call saveDataToLocalStorage', () => {
      expect(component.dataService.saveDataToLocalStorage).toHaveBeenCalledWith(
        {}
      );
    });
  });

  describe('when calling byNow', () => {
    beforeEach(async () => {
      spyOn(component.dataService, 'updateCart').and.stub();
      component.byNow({});
    });
    it('should call updateCart', () => {
      const obj = {};
      expect(component.dataService.updateCart).toHaveBeenCalledWith(obj);
    });
  });
});
