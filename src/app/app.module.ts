import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RateListComponent} from './rate-list-component/rate-list-component.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpParams} from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    RateListComponent
  ],
  imports: [
  HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatPaginatorModule,
    HttpParams,
    PageEvent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
