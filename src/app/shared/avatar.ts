import { Tone } from './tone';
import { Eyes } from './eyes';
import { Mouth } from './mouths';
import { Hair } from './hair';
import { Hairiness } from './hairiness';
import { Eyebrows } from './eyebrows';
import { Necklace } from './necklace';

export class Avatar {
    tone: Tone = {
        name: "Eggshell",
        picture: '/assets/Avatar/1-Tones/Body_Eggshell.png'
    };
    eyes: Eyes;

    eyebrows : Eyebrows;
    
    hairiness: Hairiness;

    hair: Hair;

    mouth: Mouth;

    necklace: Necklace;
}