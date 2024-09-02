import happyQuddy from '@assets/happyQuddy.svg';
import angryQuddy from '@assets/angryQuddy.svg';
import hatredQuddy from '@assets/hatredQuddy.svg';
import surpriseQuddy from '@assets/surpriseQuddy.svg';
import calmQuddy from '@assets/calmQuddy.svg';
import gloomyQuddy from '@assets/gloomyQuddy.svg';
import fearQuddy from '@assets/fearQuddy.svg';

export const EmotionQuddyList = [
  {
    id: 1,
    emotion: 'HAPPINESS',
    imgSrc: happyQuddy,
    name: '행복쿼디',
    color: '#D8B18E',
    value: 6,
  },
  {
    id: 2,
    emotion: 'ANGER',
    imgSrc: angryQuddy,
    name: '화남쿼디',
    color: '#CE8C98',
    value: 6,
  },
  {
    id: 3,
    emotion: 'DISGUST',
    imgSrc: hatredQuddy,
    name: '혐오쿼디',
    color: '#F08D74',
    value: 2,
  },
  {
    id: 4,
    emotion: 'SURPRISE',
    imgSrc: surpriseQuddy,
    name: '놀람쿼디',
    color: '#E3C778',
    value: 8,
  },
  {
    id: 5,
    emotion: 'NEUTRAL',
    imgSrc: calmQuddy,
    name: '평온쿼디',
    color: '#9CB57A',
    value: 2,
  },
  {
    id: 6,
    emotion: 'SADNESS',
    imgSrc: gloomyQuddy,
    name: '우울쿼디',
    color: '#7598BA',
    value: 10,
  },
  {
    id: 7,
    emotion: 'FEAR',
    imgSrc: fearQuddy,
    name: '두렴쿼디',
    color: '#9C8EBD',
    value: 3,
  },
];
