import { createStyles } from '@material-ui/core';

export const styles = createStyles({
  headerContainer: {
    height: 80,
  },
  catalogBtn: {
    backgroundColor: '#eee',
    width: 115,
    padding: '1px 10px',
    border: '1px solid #eee',
    '&:hover': {
      color: '#eee',
    }
  },
  btnText: {
    fontSize: 13
  },
  btnIcon: {
    transform: 'scale(0.8)',
  }
});
