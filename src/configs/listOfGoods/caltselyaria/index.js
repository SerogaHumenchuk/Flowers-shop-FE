import { caltselyariaImages } from './images';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';

const { CALCEOLARIA } = listOfGoodsConstants;

export const caltselyariaConfig = {
  title: CALCEOLARIA,
  prices: {
    ['1-50 шт.']: '25 грн',
    ['більше 50 шт.']: '20 грн',
  },
  gridType: 'gallery',
  images: caltselyariaImages,
  pagination: 10,
};

