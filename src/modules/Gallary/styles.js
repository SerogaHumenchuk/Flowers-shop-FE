import { createStyles } from '@material-ui/core';

export const styles = createStyles({
  dialogContent: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  },
  closeBtn: {
    width: 28,
    height: 28,
    margin: '5px 0 0 15px'
  },
  header: {
    height: '56px',
  },
  closeDialogIcon: {
    color: '#FFF'
  }
});
