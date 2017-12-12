import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SketchBeamerModule} from '../sketch-beamer/sketch-beamer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SketchBeamerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
