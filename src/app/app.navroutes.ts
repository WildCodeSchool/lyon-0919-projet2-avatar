import { Routes } from '@angular/router';
import { AvatarComponent } from './avatar/avatar.component';
import { CardsComponent } from './cards/cards.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';



const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'avatar', component: AvatarComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'contact', component: ContactComponent },
];

export { ROUTES };