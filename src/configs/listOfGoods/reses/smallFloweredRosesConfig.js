import { smallFloweredRosesImages } from './images';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';
const { SMALL_FLOWERED_ROSES } = listOfGoodsConstants;

export const smallFloweredRosesConfig = {
  title: SMALL_FLOWERED_ROSES,
  prices: {
    ['1-50 шт.']: '35 грн',
    ['Більше 50 шт.']: '30 грн',
    ['Більше 500 шт.']: 'Ціна договірна',
  },
  gridType: 'cards',
  images: smallFloweredRosesImages,
};
