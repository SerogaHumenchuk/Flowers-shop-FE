import { teaHybridRoses } from './images';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';
const { TEA_HYBRID_ROSES } = listOfGoodsConstants;

export const teaHybridRosesConfig = {
  title: TEA_HYBRID_ROSES,
  prices: {
    ['1-50 шт.']: '35 грн',
    ['Більше 50 шт.']: '30 грн',
    ['Більше 500 шт.']: 'Ціна договірна',
  },
  gridType: 'cards',
  images: teaHybridRoses,
};
