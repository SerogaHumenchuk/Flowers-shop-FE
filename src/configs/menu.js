import { listOfGoodsConstants } from '../constants/listOfGoods';
const {
  ROSES,
  CALCEOLARIA,
  CURRANT,
  MARGARITKA,
  PELARGONIUM,
  VIOLA,
  WICKER_ROSES,
  TEA_HYBRID_ROSES,
  SMALL_FLOWERED_ROSES,
  ALL,
} = listOfGoodsConstants;

export const menu = {
  1: {
    nodeId: 1,
    parent: 0,
    children: [2, 3, 4, 6],
    text: ROSES,
    collapsed: true,
    image: 'https://i.pinimg.com/originals/df/74/4c/df744c9fc7cad455f0fe4e00febdc48d.jpg',
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
    image: 'https://i.pinimg.com/originals/df/74/4c/df744c9fc7cad455f0fe4e00febdc48d.jpg',
  },
  8: {
    nodeId: 8,
    parent: 0,
    children: [],
    text: VIOLA,
    image: 'https://i.pinimg.com/originals/df/74/4c/df744c9fc7cad455f0fe4e00febdc48d.jpg',
  },
  9: {
    nodeId: 9,
    parent: 0,
    children: [],
    text: PELARGONIUM,
    image: 'https://i.pinimg.com/originals/df/74/4c/df744c9fc7cad455f0fe4e00febdc48d.jpg',
  },
  10: {
    nodeId: 10,
    parent: 0,
    children: [],
    text: CALCEOLARIA,
    image: 'https://i.pinimg.com/originals/df/74/4c/df744c9fc7cad455f0fe4e00febdc48d.jpg',
  },
  11: {
    nodeId: 11,
    parent: 0,
    children: [],
    text: CURRANT,
    image: 'https://i.pinimg.com/originals/df/74/4c/df744c9fc7cad455f0fe4e00febdc48d.jpg',
  },
};
