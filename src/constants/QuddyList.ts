import happyQuddy from '@assets/happyQuddy.svg';
import angryQuddy from '@assets/angryQuddy.svg';
import hatredQuddy from '@assets/hatredQuddy.svg';
import surpriseQuddy from '@assets/surpriseQuddy.svg';
import calmQuddy from '@assets/calmQuddy.svg';
import gloomyQuddy from '@assets/gloomyQuddy.svg';
import fearQuddy from '@assets/fearQuddy.svg';
import happyBubble from '../../public/image/happyBubble.svg';
import angryBubble from '../../public/image/angryBubble.svg';
import hatredBubble from '../../public/image/hatredBubble.svg';
import surpriseBubble from '../../public/image/surpriseBubble.svg';
import calmBubble from '../../public/image/calmBubble.svg';
import gloomyBubble from '../../public/image/gloomyBubble.svg';
import fearBubble from '../../public/image/fearBubble.svg';

export const quddies = [
  {
    id: 1,
    emotion: 'HAPPINESS',
    imgSrc: happyQuddy,
    bubbleSrc: happyBubble,
    text: '행복',
    name: '행복쿼디',
    color: '#D8B18E',
  },
  {
    id: 2,
    emotion: 'ANGER',
    imgSrc: angryQuddy,
    bubbleSrc: angryBubble,
    text: '화남',
    name: '화남쿼디',
    color: '#CE8C98',
  },
  {
    id: 3,
    emotion: 'DISGUST',
    imgSrc: hatredQuddy,
    bubbleSrc: hatredBubble,
    text: '혐오',
    name: '혐오쿼디',
    color: '#F08D74',
  },
  {
    id: 4,
    emotion: 'SURPRISE',
    imgSrc: surpriseQuddy,
    bubbleSrc: surpriseBubble,
    text: '놀람',
    name: '놀람쿼디',
    color: '#E3C778',
  },
  {
    id: 5,
    emotion: 'NEUTRAL',
    imgSrc: calmQuddy,
    bubbleSrc: calmBubble,
    text: '평온',
    name: '평온쿼디',
    color: '#9CB57A',
  },
  {
    id: 6,
    emotion: 'SADNESS',
    imgSrc: gloomyQuddy,
    bubbleSrc: gloomyBubble,
    text: '우울함',
    name: '우울쿼디',
    color: '#7598BA',
  },
  {
    id: 7,
    emotion: 'FEAR',
    imgSrc: fearQuddy,
    bubbleSrc: fearBubble,
    text: '두려움',
    name: '두려움쿼디',
    color: '#9C8EBD',
  },
];
