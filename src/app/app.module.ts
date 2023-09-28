import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './core/components/home/home.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { CountPanelLinksPipe } from './core/pipes/count-panel-links/count-panel-links.pipe';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { TableUpdateOrderStatusComponent } from './core/components/table-update-order-status/table-update-order-status.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { TableReceivePendingProductComponent } from './core/components/table-receive-pending-product/table-receive-pending-product.component';
import { InventoryDetailsDialogComponent } from './core/components/inventory-details-dialog/inventory-details-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'orders/table-update-order-status', component: TableUpdateOrderStatusComponent},
  { path: 'products/table-receive-pending-product', component: TableReceivePendingProductComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        CountPanelLinksPipe,
        InventoryDetailsDialogComponent
    ],
    bootstrap: [AppComponent],
    providers: [CdkColumnDef],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatExpansionModule,
        MatBadgeModule,
        FormsModule,
        RouterModule.forRoot(routes),
        NgbModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialogModule
    ]
})
export class AppModule { }
