import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUpdateOrderStatusComponent } from './table-update-order-status.component';

describe('TableUpdateOrderStatusComponent', () => {
  let component: TableUpdateOrderStatusComponent;
  let fixture: ComponentFixture<TableUpdateOrderStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableUpdateOrderStatusComponent]
    });
    fixture = TestBed.createComponent(TableUpdateOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
