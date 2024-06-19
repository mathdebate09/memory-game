import { v4 as uuid } from 'uuid';

import AxoltolImg from '../assets/images/characters/axoltol.png'
import BeeImg from '../assets/images/characters/bee.png';
import BoggedImg from '../assets/images/characters/bogged.png';
import EnderDragonImg from '../assets/images/characters/ender-dragon.png';
import EndermanImg from '../assets/images/characters/enderman.png';
import SkeletonHorseImg from '../assets/images/characters/skeleton-horse.png';
import TechnopigImg from '../assets/images/characters/technopig.png';
import TurtleImg from '../assets/images/characters/turtle.png';
import VindicatorImg from '../assets/images/characters/vindicator.png';
import WardenImg from '../assets/images/characters/warden.png';
import WitherImg from '../assets/images/characters/wither.png';
import WolfImg from '../assets/images/characters/wolf.png';

const data = [ 
    {
        name: 'Axoltol',
        img: AxoltolImg,
        id: uuid()
    },
    {
        name: 'Bee',
        img: BeeImg,
        id: uuid()
    },
    {
        name: 'Bogged Skeleton',
        img: BoggedImg,
        id: uuid()
    },
    {
        name: 'Ender Dragon',
        img: EnderDragonImg,
        id: uuid()
    },
    {
        name: 'Enderman',
        img: EndermanImg,
        id: uuid()
    },
    {
        name: 'Skeleton Horse',
        img: SkeletonHorseImg,
        id: uuid()
    },
    {
        name: 'TechnoBlade',
        img: TechnopigImg,
        id: uuid()
    },
    {
        name: 'Turtle',
        img: TurtleImg,
        id: uuid()
    },
    {
        name: 'Vindicator',
        img: VindicatorImg,
        id: uuid()
    },
    {
        name: 'Warden',
        img: WardenImg,
        id: uuid()
    },
    {
        name: 'Wither',
        img: WitherImg,
        id: uuid()
    },
    {
        name: 'Wolf',
        img: WolfImg,
        id: uuid()
    },
]

export default data