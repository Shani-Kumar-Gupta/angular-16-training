import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SearchComponent } from './product-list/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Register Components, Directives
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    DataBindingComponent,
    SearchComponent
  ],
  imports: [
    // Register Modules
    BrowserModule,
    FormsModule
  ],
  providers: [
    // Register Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
