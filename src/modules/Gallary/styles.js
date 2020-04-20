import { createStyles } from '@material-ui/core';

export const styles = createStyles({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  list: {
    maxWidth: 1200,
    margin: 'auto'
  },
  item: {
    minHeight: '25vw',
  },
  closeBtn: {
    margin: '0 0 0 auto',
  },
  header: {
    padding: '4px 10px',
    height: '56px',
  },
  closeDialogIcon: {
    color: '#FFF',
  },
  imageContainer: {
    width: '100%',
    maxWidth: 1200,
    height: '100%',
    marginTop: 56,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto'
  },
  dialogImage: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
});
