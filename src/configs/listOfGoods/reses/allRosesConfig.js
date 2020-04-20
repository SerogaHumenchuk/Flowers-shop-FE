import { smallFloweredRosesImages, wickerRosesImages, teaHybridRoses } from './images';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';
const { ROSES } = listOfGoodsConstants;

export const allRosesConfig = {
  title: ROSES,
  prices: null,
  gridType: 'cards',
  images: [...teaHybridRoses, ...wickerRosesImages, ...smallFloweredRosesImages],
  pagination: 10,
};
