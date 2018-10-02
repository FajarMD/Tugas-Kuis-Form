import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KuisComponent } from './kuis/kuis.component';
import { PegawaiComponent } from './pegawai/pegawai.component';

@NgModule({
  declarations: [
    AppComponent,
    KuisComponent,
    PegawaiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
