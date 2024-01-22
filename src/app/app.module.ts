import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { VseKursiComponent } from './pages/vse-kursi/vse-kursi.component';
import { OchniyKursComponent } from './pages/ochniy-kurs-page/ochniy-kurs/ochniy-kurs.component';
import { OnlaynKursComponent } from './pages/onlayn-kursi/onlayn-kurs/onlayn-kurs.component';
import { FreeLearnsComponent } from './pages/free-learn/free-learns/free-learns.component';
import { PaidRoliksComponent } from './pages/paiding-pages/paid-roliks/paid-roliks.component';
import { NotfoundComponent } from './pages/notfound-page/notfound/notfound.component';
import { ONasComponent } from './pages/O-nas-page/o-nas/o-nas.component';
import { OtziviComponent } from './pages/Otzivi/otzivi/otzivi.component';
import { StrStatiComponent } from './pages/str-stati-page/str-stati/str-stati.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VseKursiComponent,
    OchniyKursComponent,
    OnlaynKursComponent,
    FreeLearnsComponent,
    PaidRoliksComponent,
    NotfoundComponent,
    ONasComponent,
    OtziviComponent,
    StrStatiComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
