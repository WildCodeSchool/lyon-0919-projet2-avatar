import { Injectable } from '@angular/core';
import { Avatar } from './shared/avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  avatars: Avatar[];

  public getAvatars(): Avatar[] {
    return this.avatars;
  }

  constructor() { }
}
