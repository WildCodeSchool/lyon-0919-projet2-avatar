import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { ContactComponent } from './contact/contact.component';
import { ROUTES } from './app.navroutes';
import { RouterModule } from '@angular/router';
import { SkinGenComponent } from './skin-gen/skin-gen.component';
import { DisplayAvatarComponent } from './display-avatar/display-avatar.component';
import { PaymentComponent } from './payment/payment.component';
import { EyesGenComponent } from './eyes-gen/eyes-gen.component';

import { HairinessGenComponent } from './hairiness-gen/hairiness-gen.component';
import { HairGenComponent } from './hair-gen/hair-gen.component';


@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    NavbarComponent,
    HomeComponent,
    CardsComponent,
    ContactComponent,
    SkinGenComponent,
    DisplayAvatarComponent,
    PaymentComponent,
    EyesGenComponent,
    HairinessGenComponent,
    HairGenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
