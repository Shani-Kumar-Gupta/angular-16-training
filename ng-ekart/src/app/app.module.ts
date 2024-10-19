import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    // Register Components, Directives
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent
  ],
  imports: [
    // Register Modules
    BrowserModule
  ],
  providers: [
    // Register Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
