import { Component, OnInit } from '@angular/core';
import { Cards } from '../shared/cards';
import { Card } from '../shared/card';
import { AvatarService } from '../avatar.service';
import { Avatar } from '../shared/avatar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  displayCards: Cards = new Cards;
  card: Card;
  avatarToDisplay: Avatar;

  constructor(private avatarService : AvatarService, private router: Router) { }

  ngOnInit() {
    this.avatarToDisplay = this.avatarService.avatarCreated;
    console.log(this.avatarToDisplay);
  }
  
  onCardSelected(c: Card) {
    this.displayCards.card = c;
  }

  onReturnClicked() {
    this.router.navigate(['/avatar']);
  }

  
}
