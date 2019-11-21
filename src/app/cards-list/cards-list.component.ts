import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CARDS } from '../shared/cards-mock';
import { Card } from '../shared/card';
import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  @Output() cardsEvent = new EventEmitter<Card>() 
  cards: Card[] = CARDS;
  card: Card


  constructor() { }

  ngOnInit() {
  }
  onCardClick(c: Card) {
    this.card = c;
    this.cardsEvent.emit(c);
  }
}