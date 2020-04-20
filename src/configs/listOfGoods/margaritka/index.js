import { margoImages } from './images';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';

const { MARGARITKA } = listOfGoodsConstants;

export const margoConfig = {
  title: MARGARITKA,
  prices: {
    ['1-50 шт.']: '15 грн',
    ['більше 50 шт.']: '12 грн',
  },
  gridType: 'gallery',
  images: margoImages,
  pagination: 10,
};