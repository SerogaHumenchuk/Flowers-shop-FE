import { createStyles } from '@material-ui/core';

const drawerWidth = 280;

export const styles = createStyles({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'relative',
  },
  list: {
    padding: 0
  },
  link: {
    padding: '8px',
    cursor: 'pointer',
    color: '#3F51B5',
    textDecoration: 'none'
  },
  closeDrawerIcon: {
    color: '#3f51b5',
  },
});
