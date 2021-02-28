import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { AddressComponent } from './address/address.component';
import { MoneyExchangeComponent } from './money-exchange/money-exchange.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    AddressComponent,
    MoneyExchangeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
