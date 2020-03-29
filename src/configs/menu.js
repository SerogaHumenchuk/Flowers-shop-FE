import { listOfGoodsConstants } from '../constants/listOfGoods';
const { ROSES, CALCEOLARIA, CURRANT, MARGARITKA, PELARGONIUM, VIOLA, WICKER_ROSES, TEA_HYBRID_ROSES, SMALL_FLOWERED_ROSES, ALL } = listOfGoodsConstants;

export const menu = {
  1: {
    nodeId: 1,
    parent: 0,
    children: [2, 3, 4, 6],
    text: ROSES,
    collapsed: true,
  },
  2: {
    nodeId: 2,
    parent: 1,
    children: [],
    text: TEA_HYBRID_ROSES,
  },
  3: {
    nodeId: 3,
    parent: 1,
    children: [],
    text: SMALL_FLOWERED_ROSES,
  },
  4: {
    nodeId: 4,
    parent: 1,
    children: [],
    text: WICKER_ROSES,
  },
  6: {
    nodeId: 6,
    parent: 1,
    children: [],
    text: ALL,
  },
  7: {
    nodeId: 7,
    parent: 0,
    children: [],
    text: MARGARITKA,
  },
  8: {
    nodeId: 8,
    parent: 0,
    children: [],
    text: VIOLA,
  },
  9: {
    nodeId: 9,
    parent: 0,
    children: [],
    text: PELARGONIUM,
  },
  10: {
    nodeId: 10,
    parent: 0,
    children: [],
    text: CALCEOLARIA,
  },
  11: {
    nodeId: 11,
    parent: 0,
    children: [],
    text: CURRANT,
  },
};
