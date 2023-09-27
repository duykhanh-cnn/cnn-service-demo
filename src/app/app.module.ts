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
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms';
import { CountPanelLinksPipe } from './core/pipes/count-panel-links/count-panel-links.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableCompleteOrder } from './core/components/table-complete-order/table-complete-order/table-complete-order.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: '/order/ocs-update-status', component: TableCompleteOrder}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        CountPanelLinksPipe
    ],
    providers: [],
    bootstrap: [AppComponent],
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
        TableCompleteOrder
    ]
})
export class AppModule { }
