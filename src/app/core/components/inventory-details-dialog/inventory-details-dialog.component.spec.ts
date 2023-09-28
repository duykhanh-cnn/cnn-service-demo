import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDetailsDialogComponent } from './inventory-details-dialog.component';

describe('InventoryDetailsDialogComponent', () => {
  let component: InventoryDetailsDialogComponent;
  let fixture: ComponentFixture<InventoryDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(InventoryDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
