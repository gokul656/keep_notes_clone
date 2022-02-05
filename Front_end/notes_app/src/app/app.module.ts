import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [AppComponent, AppbarComponent, ListViewComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, 
    FlexLayoutModule, MatSidenavModule, MatMenuModule,
    BrowserAnimationsModule, MatTooltipModule, MatCardModule,
    MatBadgeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
