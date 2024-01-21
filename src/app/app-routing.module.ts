import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VseKursiComponent } from './pages/vse-kursi/vse-kursi.component';
import { OchniyKursComponent } from './pages/ochniy-kurs-page/ochniy-kurs/ochniy-kurs.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { OnlaynKursComponent } from './pages/onlayn-kursi/onlayn-kurs/onlayn-kurs.component';
import { FreeLearnsComponent } from './pages/free-learn/free-learns/free-learns.component';
import { PaidRoliksComponent } from './pages/paiding-pages/paid-roliks/paid-roliks.component';
import { NotfoundComponent } from './pages/notfound-page/notfound/notfound.component';
import { ONasComponent } from './pages/O-nas-page/o-nas/o-nas.component';
import { OtziviComponent } from './pages/Otzivi/otzivi/otzivi.component';
import { StrStatiComponent } from './pages/str-stati-page/str-stati/str-stati.component';

const routes: Routes = [
  { path: 'vse-kursi', component: VseKursiComponent },
  { path: 'ochniy-kurs', component: OchniyKursComponent },
  { path: 'onlayn-kurs', component: OnlaynKursComponent },
  { path: 'free-learns', component: FreeLearnsComponent },
  { path: 'paid-roliks', component: PaidRoliksComponent },
  { path: 'str-stati', component: StrStatiComponent },
  { path: 'otzivi', component: OtziviComponent },
  { path: 'o-nas', component: ONasComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
