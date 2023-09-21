import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';
import { Exercise2Component } from './exercise2/exercise2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { StoreItemDataComponent } from './exercise2/addProduct/add-product-form.component';
import { StoreHtmlDataComponent } from './exercise2/displayProduct/display-product.component';
import { SpanDirectiveDirective } from './span-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    Exercise2Component,
    StoreItemDataComponent,
    StoreHtmlDataComponent,
    SpanDirectiveDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
