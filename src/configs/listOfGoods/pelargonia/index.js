import { pelargoniaImages } from './images';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';

const { PELARGONIUM } = listOfGoodsConstants;

export const pelargoniaConfig = {
  title: PELARGONIUM,
  prices: {
    ['Ринка 12см в діаметрі']: '80 грн',
    ['Кашпо 23см в діаметрі']: '150 грн',
  },
  gridType: 'gallery',
  images: pelargoniaImages,
};

