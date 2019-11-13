import { Component, OnInit, Input } from '@angular/core';
import { Cards } from '../shared/cards';
import { CARDS } from '../shared/cards-mock';
import { Card } from '../shared/card';
import { Avatar } from '../shared/avatar';
import { Tone } from '../shared/tone';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {
  @Input() avatarToCard: Avatar[];
  
  @Input() cardsToDisplay: Cards
  card: Card[] = CARDS;

  
  constructor() { }

  ngOnInit() {
    //console.log(this.avatarToCard);
  }

}
