import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
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
import { FooterComponent } from './components/footer/footer.component';
import { ReviewComponent } from './components/review/review.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TbilisiComponent,
    MtskhetaComponent,
    WinetoursComponent,
    GoriComponent,
    SignaxiComponent,
    BorjomiComponent,
    KazbegiComponent,
    BatumiComponent,
    ContactsComponent,
    FooterComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
