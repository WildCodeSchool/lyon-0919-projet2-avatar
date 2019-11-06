import { Component, OnInit, Input } from '@angular/core';
import { Cards } from '../shared/cards';
import { CARDS } from '../shared/cards-mock';
import { Card } from '../shared/card';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {

  @Input() cardsToDisplay: Cards
  card: Card[] = CARDS

  
  constructor() { }

  ngOnInit() {
  }

}
