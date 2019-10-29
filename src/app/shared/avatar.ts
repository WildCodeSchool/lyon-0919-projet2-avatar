import { Tone } from './tone';
import { Eyes } from './eyes';
import { Hair } from './hair'

export class Avatar {
    tone: Tone = {
        name: "Eggshell",
        picture: '/assets/Avatar/1-Tones/Body_Eggshell.png'
    };
    eyes: Eyes;
    hair: Hair;
}