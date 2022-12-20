import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Componnet1Component } from './componnet1/componnet1.component';
import { Componnet2Component } from './componnet2/componnet2.component';

@NgModule({
  declarations: [
    AppComponent,
    Componnet1Component,
    Componnet2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
