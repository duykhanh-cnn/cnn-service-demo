import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

export interface InventoryDetailsData {
  row: any;
}

@Component({
  selector: 'app-inventory-details-dialog',
  templateUrl: './inventory-details-dialog.component.html',
  styleUrls: ['./inventory-details-dialog.component.css'],
})
export class InventoryDetailsDialogComponent implements OnInit {
  displayedColumns = ['hub', 'total'];
  dataSource = new MatTableDataSource<any>();
  resultsLength!: number;

  constructor(
    public dialogRef: MatDialogRef<InventoryDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InventoryDetailsData
  ) {}

  ngOnInit(): void {
    // Generate random inventory data
    const hubs = ['HIEPPHUOC', 'QUAN8', 'HANOI', 'KHANHHOA', 'QUANGNAM', 'GIALAI', 'BINHDINH', 'BINHTHUAN', 'DONG NAI', 'TAYNINH', 'TIENGIANG', 'DONGTHAP', 'CANTHO', 'ANGIANG', 'SOCTRANG', 'CAMAU', 'KHONGQUAKHO'];
    this.resultsLength = hubs.length;
    this.dataSource.data = hubs.map((hub) => ({
      hub,
      total: Math.floor(Math.random() * 100),
    }));
  }

  onClose() {
    this.dialogRef.close();
  }
}