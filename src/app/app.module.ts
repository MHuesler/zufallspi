import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';

const modules = [
  MatInputModule,
  MatSliderModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    modules
  ],
  exports: [
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
