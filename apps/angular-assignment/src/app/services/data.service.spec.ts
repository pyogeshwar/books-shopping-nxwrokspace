import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data.service';
describe('DataService', () => {
  let injector: TestBed;
  let service: DataService;
  const books = [
    {
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
    },
    {
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
          'In OBJECT THINKING, esteemed object technologist David West contends that the mindset makes ',
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
          'Application View Application Object w/ application ApplicationDispatche...',
      },
      type: '[Cart] Add To Cart',
      purchaseInfo: {
        address:
          'flat no - 312, block a,\nsvs avaasa apartments, annapurna enclave, chandanagar',
        name: 'arthireddy pedditti',
        email: 'a@test.com',
        phoneNumber: '8019133370',
      },
    },
  ];
  const book = {
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
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    injector = getTestBed();
    service = injector.inject(DataService);
  });
  describe('when calling filterBooks', () => {
    it('should return an Observable<Book[]>', () => {
      service.filterBooks('').subscribe((res) => {
        expect(res).toEqual(books);
      });
    });
  });
  describe('when calling getBook', () => {
    it('should return an Observable<BookDetails[]>', () => {
      service.getBook('').subscribe((res) => {
        expect(res).toEqual(book);
      });
    });
  });
  // describe('when calling setUserDetails', () => {
  //   it('should  set User Details', () => {
  //     const user = {
  //       name: '',
  //       email: '',
  //       phone: '',
  //       address: '',
  //     };
  //     expect(service.setUserDetails(user)).toEqual({});
  //   });
  // });
});
