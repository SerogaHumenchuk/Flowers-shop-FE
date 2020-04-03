import { wickerRosesImages } from './images';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';
const { WICKER_ROSES } = listOfGoodsConstants;

export const wickerRosesConfig = {
  title: WICKER_ROSES,
  prices: {
    ['1-50 шт.']: '40 грн',
    ['Більше 50 шт.']: '35 грн',
    ['Більше 500 шт.']: 'Ціна договірна',
  },
  gridType: 'cards',
  images: wickerRosesImages,
};
