import { Component, OnInit } from '@angular/core';
import { Cards } from '../shared/cards';
import { Card } from '../shared/card';
import { AvatarService } from '../avatar.service';
import { Avatar } from '../shared/avatar';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  displayCards: Cards = new Cards;
  card: Card;
  avatarToDisplay: Avatar[];
  avatarOnCard: Avatar[];

  constructor(private avatarService : AvatarService) { }

  ngOnInit() {
    this.avatarToDisplay = this.avatarService.avatarCreated;
    //console.log(this.avatarToDisplay)
  }
  
  onCardSelected(c: Card) {
    this.displayCards.card = c;
  }

  // onAvatarSelected(avatarToDisplay: Avatar[]) {
  //   this.avatarOnCard = avatarToDisplay;
  //   console.log(this.avatarOnCard);
  // }

  onSaveClicked(){ 
    html2canvas(document.querySelector("#capture"),{
      width: 300,
      height: 180,
      backgroundColor: null
    }).then(canvas => {
      // Convert the canvas to blob
      canvas.toBlob(function(blob){
        // To download directly on browser default 'downloads' location
        let link = document.createElement("a");
        link.download = "image.png";
        link.href = URL.createObjectURL(blob);
        link.click();
        // To save manually somewhere in file explorer
      },'image/png');
    });
  }
  
}
