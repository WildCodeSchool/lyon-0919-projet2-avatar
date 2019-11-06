import { Component, OnInit } from '@angular/core';
import { Cards } from '../shared/cards';
import { Card } from '../shared/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  displayCards: Cards = new Cards;
  card: Card;

  constructor() { }

  ngOnInit() {
  }
  
  onCardSelected(c: Card) {
    this.displayCards.card = c;
  }
}
