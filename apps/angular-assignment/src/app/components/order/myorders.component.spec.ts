import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { HttpClientModule } from '@angular/common/http';

import { MyOrdersComponent } from './myorders.component';
import { DataService } from '../../services/data.service';

describe('MyOrdersComponent', () => {
  let component: MyOrdersComponent;
  let fixture: ComponentFixture<MyOrdersComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, MaterialModule],
      declarations: [MyOrdersComponent],
      providers: [DataService],
    }).compileComponents();
  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(MyOrdersComponent);
    component = fixture.componentInstance;
  });

  describe('when caling getUserData', () => {
    beforeEach(async () => {
      spyOn(component.dataService, 'userData').and.returnValue({
        subscribe: () => ({}),
      });
      component.getUserData();
    });

    it('should call userData and return user', fakeAsync(() => {
      expect(component).toBeTruthy();
    }));

    it('should resolve test data', fakeAsync(() => {
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.user).toEqual({});
    }));
  });

  describe('when calling trackByMethod', () => {
    it('should return the book id', () => {
      const obj = { id: 1 };
      expect(component.trackByMethod(obj)).toEqual(1);
    });
  });
});
