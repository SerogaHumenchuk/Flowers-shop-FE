import { createStyles } from '@material-ui/core';

export const styles = createStyles({
  container: {
    width: '90%',
    padding: '1% 5%'
  },
  table: {
    marginBottom: 60,
  },
  td: {
    padding: '1vw',
  },
  icon: {
    width: '7.5vw',
    maxWidth: 30,
    height: '7.5vw',
    maxHeight: 30,
    margin: '0 1vw',
  },
  bold: {
    fontWeight: 600,
  },
  mail: {
    fontSize: 14,
    fontWeight: 600,
  },
  link: {
    textDecoration: 'none',
    color: '#3F51B5',
    fontWeight: 700,
  },
  writeUsMessage: {
    fontSize: 14,
    fontWeight: 600,
    marginRight: 5,
  },
  mapContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: 200,
    '& div': {
      '&:first-child': {
        maxWidth: '200px'
      },
    },
  }
});
