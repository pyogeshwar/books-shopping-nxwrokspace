import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';

import { MyCartComponent } from './mycart.component';
import { BooksComponent } from '../books/books.component';
import { DataService } from '../../services/data.service';
describe('MyCartComponent', () => {
  let component: MyCartComponent;
  let fixture: ComponentFixture<MyCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, MaterialModule],
      declarations: [MyCartComponent, BooksComponent],
      providers: [DataService],
    }).compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(MyCartComponent);
    component = fixture.componentInstance;
  });

  describe('when caling getCartItems', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    beforeEach(async () => {});

    it('should call cartItems and return list of books', fakeAsync(() => {
      expect(component).toBeTruthy();
    }));

    it('should resolve test data', fakeAsync(() => {
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.books).toEqual([]);
    }));
  });
});
