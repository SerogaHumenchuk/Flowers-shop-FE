import { currantsImages } from './images';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';

const { CURRANT } = listOfGoodsConstants;

export const carrantConfig = {
  title: CURRANT,
  prices: {
    ['1-100 шт.']: '20 грн',
    ['більше 100']: '15 грн',
  },
  gridType: 'gallery',
  images: currantsImages,
};

