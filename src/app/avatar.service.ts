import { Injectable } from '@angular/core';
import { Avatar } from './shared/avatar';
import { Card } from './shared/card';
import { Cards } from './shared/cards';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  avatar: Avatar;
  avatarCreated : Avatar = new Avatar;
  showAvatar = 'none';
  card: Card;

  constructor() { }
}
