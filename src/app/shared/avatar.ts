import { Tone } from './tone';
import { Eyes } from './eyes';

export class Avatar {
    tone: Tone = {
        name: "Eggshell",
        picture: '/assets/Avatar/1-Tones/Body_Eggshell.png'
    };
    eyes: Eyes;
  hairiness: import("/home/hugo/Desktop/Projects/bim-project/lyon-0919-projet2-avatar/src/app/shared/hairiness").Hairiness;
}