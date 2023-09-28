import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgIf, DatePipe} from '@angular/common';
import { WoocommerceService } from '../../services/woocommerce/woocommerce.service';
import { environment } from '../../environment/environment';
import { InventoryDetailsDialogComponent } from '../inventory-details-dialog/inventory-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-table-receive-pending-product',
  templateUrl: './table-receive-pending-product.component.html',
  styleUrls: ['./table-receive-pending-product.component.css'],
  standalone: true,
  imports: [
    NgIf,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DatePipe,
  ],
})
export class TableReceivePendingProductComponent implements AfterViewInit {
  source_url: string = environment.ec.storeUrl;
  displayedColumns: string[] = ['date_modified', 'sku', 'id', 'name', 'store_id', 'store_name', 'sale_price', 'open_inventory_dialog'];
  data: Product[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private woocommerceService: WoocommerceService, public dialog: MatDialog) {}

  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.woocommerceService!.getPendingProducts(this.sort.active, 
            this.sort.direction, this.paginator.pageIndex, 30)
          .pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;
          
          
          if (data === null) {
            return [];
          }
          data = data.filter((item: { on_sale: boolean; }) => item.on_sale === true);
          this.resultsLength = data.length;
          return data;
        }),
      )
      .subscribe(data => (this.data = data));
  }

  openDetailsDialog(_row: any) {
    console.log("hi");
    // Create a dialog with a table of the product's inventory by hub
    const dialog = this.dialog.open(InventoryDetailsDialogComponent, {
      width: '80%',
      height: '80%',
    });
  }

  generateTotalInStock() {
    return Math.floor(Math.random() * 100);
  }
}

export interface Product {
  id: string;
  name: string;
  date_modified: Date;
  sku: string;
  store: {
    vendor_id: string,
    vendor_shop_name: string
  };
  sale_price: string;
}

