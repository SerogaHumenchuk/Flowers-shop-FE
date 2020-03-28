import { createStyles } from '@material-ui/core';

const drawerWidth = 300;

export const styles = createStyles({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    position: 'relative',
  },
  drawerHeader: {
    padding: '5px 5px 5px 15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeDrawerTitle: {
    color: '#3f51b5',
    fonstSize: 18,
    fontWeight: 800,
  },
  item: {
    padding: '8px',
    cursor: 'pointer',
  },
  subItem: {
    padding: '6px 8px',
  },
  closeDrawerIcon: {
    color: '#3f51b5',
  },
  collapse: {
    paddingLeft: 40,
  },
  collapseContainer: {
    width: 24,
    height: 24,
  },
  contactsBtn: {
    width: 270,
    position: 'fixed',
    top: 'auto',
    bottom: '2%',
    left: 15,
  },
  contactLink: {
    color: '#fff',
    textDecoration: 'none',
  },
});
