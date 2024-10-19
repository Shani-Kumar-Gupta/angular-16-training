import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    // Register Components, Directives
    AppComponent,
    HeaderComponent,
    FooterComponent
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
