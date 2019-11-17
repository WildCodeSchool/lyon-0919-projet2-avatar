import { Component, OnInit, Input } from '@angular/core';
import { CARDS } from '../shared/cards-mock';
import { Card } from '../shared/card';
import { Avatar } from '../shared/avatar';
import { Buble } from '../shared/buble';
import { BUBLES } from '../shared/bubles-mock';
import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.css']
})
export class DisplayCardsComponent implements OnInit {
  @Input() avatarToCard: Avatar;
  
  @Input() cardsToDisplay: Card;
  card: Card[] = CARDS;
  buble: Buble[] = BUBLES;

  @Input() messageBuble: string;
    
  avatarOnCard = this.avatarService.avatarCreated;
  show = this.avatarService.showAvatar;

  constructor(private avatarService : AvatarService) { }

  ngOnInit() {
  }
 
 

}
