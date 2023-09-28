import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReceivePendingProductComponent } from './table-receive-pending-product.component';

describe('TableReceivePendingProductComponent', () => {
  let component: TableReceivePendingProductComponent;
  let fixture: ComponentFixture<TableReceivePendingProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableReceivePendingProductComponent]
    });
    fixture = TestBed.createComponent(TableReceivePendingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
