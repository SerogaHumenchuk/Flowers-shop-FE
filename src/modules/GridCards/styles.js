import { createStyles } from '@material-ui/core';

export const styles = createStyles({
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 'auto',
    width: '100%',
  },
  item: {
    width: '100%',
    maxWidth: 340,
    // height: 380,
  },
  card: {
    width: '100%',
    // height: '100%',
  },
  img: {
    display: 'block',
    height: 'auto',
    maxHeight: '290',
    width: '100%',
  },
  // description: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   padding: '10px 15px',
  // },
  // name: {
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  // },
  // price: {
  //   fontWeight: 'bold',
  // },
});
