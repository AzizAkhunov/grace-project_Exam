import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { VseKursiComponent } from './pages/vse-kursi/vse-kursi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VseKursiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
