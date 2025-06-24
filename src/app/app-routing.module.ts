import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TbilisiComponent } from './cities/tbilisi/tbilisi.component';
import { MtskhetaComponent } from './cities/mtskheta/mtskheta.component';
import { WinetoursComponent } from './cities/winetours/winetours.component';
import { GoriComponent } from './cities/gori/gori.component';
import { SignaxiComponent } from './cities/signaxi/signaxi.component';
import { BorjomiComponent } from './cities/borjomi/borjomi.component';
import { KazbegiComponent } from './cities/kazbegi/kazbegi.component';
import { BatumiComponent } from './cities/batumi/batumi.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ReviewComponent } from './components/review/review.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'tbilisi', component: TbilisiComponent},
  { path: 'mtskheta', component: MtskhetaComponent},
  { path: 'winetours', component: WinetoursComponent},
  { path: 'gori', component: GoriComponent},
  { path: 'signaxi', component: SignaxiComponent},
  { path: 'borjomi', component: BorjomiComponent},
  { path: 'kazbegi', component: KazbegiComponent},
  { path: 'batumi', component: BatumiComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'review', component: ReviewComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
