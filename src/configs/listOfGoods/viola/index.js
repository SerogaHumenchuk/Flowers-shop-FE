import { vioalImages } from './images';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';

const { VIOLA } = listOfGoodsConstants;

export const vioalConfig = {
  title: VIOLA,
  prices: {
    ['1-50 шт.']: '15 грн',
    ['більше 50 шт.']: '12 грн',
  },
  gridType: 'gallery',
  images: vioalImages,
};

