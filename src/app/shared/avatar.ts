import { Tone } from './tone';
import { Eyes } from './eyes';
import { Mouth } from './mouths';
import { Hair } from './hair';
import { Hairiness } from './hairiness';
import { Clothes } from './clothes';
import { Eyebrows } from './eyebrows';
import { Earrings } from './earrings';
import { Necklace } from './necklace';
import { Hat } from './hat';
import { Glasses } from './glasses';


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

    earrings: Earrings;

    necklace: Necklace;

    hat: Hat;

    clothes: Clothes;

    glasses: Glasses;
}