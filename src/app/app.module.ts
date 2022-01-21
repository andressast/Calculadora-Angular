import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoracientModule } from '.';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalculadoracientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
