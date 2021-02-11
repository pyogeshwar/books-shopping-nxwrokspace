import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';

import { BooksComponent } from './books.component';
import { of } from 'rxjs';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let book;
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
    book = {
      kind: 'books#volume',
      id: '6JVCAwAAQBAJ',
      etag: 'hlStCIjV/uI',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/6JVCAwAAQBAJ',
      volumeInfo: {
        title: 'Object Thinking',
        authors: ['David West'],
        publisher: 'Microsoft Press',
        publishedDate: '2004-02-11',
        description:
          'In OBJECT THINKING, esteemed object technologistbject relationships',
        industryIdentifiers: [
          { type: 'ISBN_13', identifier: '9780735637511' },
          { type: 'ISBN_10', identifier: '0735637512' },
        ],
        readingModes: { text: true, image: true },
        pageCount: 368,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '3.6.5.0.preview.3',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=6JVCAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.co.in/books?id=6JVCAwAAQBAJ&pg=PA268&dq=%5Bobject+Object%5D&hl=&cd=1&source=gbs_api',
        infoLink:
          'https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&source=gbs_api',
        canonicalVolumeLink:
          'https://play.google.com/store/books/details?id=6JVCAwAAQBAJ',
      },
      saleInfo: {
        country: 'IN',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: { amount: 2064.52, currencyCode: 'INR' },
        retailPrice: { amount: 929.03, currencyCode: 'INR' },
        buyLink:
          'https://play.google.com/store/books/details?id=6JVCAwAAQBAJ&rdid=book-6JVCAwAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: { amountInMicros: 2064520000, currencyCode: 'INR' },
            retailPrice: { amountInMicros: 929030000, currencyCode: 'INR' },
          },
        ],
      },
      accessInfo: {
        country: 'IN',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: { isAvailable: false },
        pdf: { isAvailable: false },
        webReaderLink:
          'http://play.google.com/books/reader?id=6JVCAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Application View Application Object w/ application ApplicationDispatcher..',
      },
      type: '[Cart] Add To Cart',
      purchaseInfo: {
        address:
          'flat no - 312, block a,\nsvs avaasa apartments, annapurna enclave, chandanagar',
        name: 'arthireddy pedditti',
        email: 'a@test.com',
        phoneNumber: '8019133370',
      },
    };
  });

  describe('when calling viewBook', () => {
    beforeEach(async () => {
      spyOn(component.dataService, 'getBook').and.returnValue({
        subscribe: () => ({}),
      });
      component.viewBook({});
    });

    it('should call getBook and return the book', fakeAsync(() => {
      expect(component.dataService.getBook).toHaveBeenCalled();
    }));

    it('should call getBook and return the book', fakeAsync((book) => {
      component.dataService.getBook = () => of(book);
      component.viewBook({});
      component.dataService.getBook('').subscribe((res) => {
        expect(res).toEqual(book);
      });
    }));
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
