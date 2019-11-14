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
import { MouthsGenComponent } from './mouths-gen/mouths-gen.component';
import { HairinessGenComponent } from './hairiness-gen/hairiness-gen.component';
import { HairGenComponent } from './hair-gen/hair-gen.component';
import { ClothesGenComponent } from './clothes-gen/clothes-gen.component';
import { EyebrowsGenComponent } from './eyebrows-gen/eyebrows-gen.component';
import { EarringsGenComponent } from './earrings-gen/earrings-gen.component';
import { NecklaceGenComponent } from './necklace-gen/necklace-gen.component';
import { HatGenComponent } from './hat-gen/hat-gen.component';
import { GlassesGenComponent } from './glasses-gen/glasses-gen.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { DisplayCardsComponent } from './display-cards/display-cards.component';
import { BublesComponent } from './bubles/bubles.component';



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
    MouthsGenComponent,
    HairinessGenComponent,
    HairGenComponent,
    ClothesGenComponent,
    EyebrowsGenComponent,
    EarringsGenComponent,
    NecklaceGenComponent,
    HatGenComponent,
    GlassesGenComponent,
    CardsListComponent,
    DisplayCardsComponent,
    BublesComponent,
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
