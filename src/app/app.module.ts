import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CardComponent } from './card/card.component';
import { DirectivaDirective } from './directiva.directive';
import { Diretiva2Directive } from './diretiva2.directive';
import { Diretiva3Directive } from './diretiva3.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DirectivaDirective,
    Diretiva2Directive,
    Diretiva3Directive
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
