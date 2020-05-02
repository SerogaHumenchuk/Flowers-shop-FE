import { createStyles } from '@material-ui/core';

export const styles = createStyles({
  list: {
    margin: '0 auto',
    padding: 0,
    marginTop: '10px',
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  item: {
    cursor: 'pointer',
    position: 'relative',
    marginBottom: '10px',
    maxWidth: 320,
    height: 'auto',
    '&:hover': {
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    },
    '&::before': {
      content: `''`,
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(20, 39, 41, 0.5)',
      zIndex: '1',
    },
  },

  text: {
    color: '#fff',
    fontSize: '34px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '1',
  },

  img: {
    display: 'block',
    width: '100%',
    haight: '100%',
  },
});
