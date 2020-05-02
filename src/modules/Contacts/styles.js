import { createStyles } from '@material-ui/core';

export const container = {
  xs: 'tablesContainer_small',
  sm: 'tablesContainer_small',
  md: 'tablesContainer_large',
  lg: 'tablesContainer_large',
  xl: 'tablesContainer_large',
};

const containerStyles = {
  container: {
    margin: '20px 0',
  },
  tablesContainer_large: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export const mapContainer = {
  xs: 'mapContainer_small',
  sm: 'mapContainer_small',
  md: 'mapContainer_md',
  lg: 'mapContainer_lg',
  xl: 'mapContainer_xl',
};

const mapContainerStyles = {
  mapContainer_small: {
    display: 'flex',
    justifyContent: 'center',
    '& div': {
      '&:first-child': {
        left: '5vw',
        maxWidth: '90vw',
      },
    },
  },
  mapContainer_md: {
    display: 'flex',
    justifyContent: 'center',
    '& div': {
      '&:first-child': {
        right: 10,
        maxWidth: '50vw',
        maxHeight: '90vh',
      },
    },
  },
  mapContainer_lg: {
    display: 'flex',
    justifyContent: 'center',
    '& div': {
      '&:first-child': {
        right: 10,
        maxWidth: '60vw',
        maxHeight: '90vh',
      },
    },
  },
  mapContainer_xl: {
    display: 'flex',
    justifyContent: 'center',
    '& div': {
      '&:first-child': {
        right: 10,
        maxWidth: '70vw',
        maxHeight: '90vh',
      },
    },
  },
};

export const styles = createStyles({
  container: {
    width: '90%',
    margin: 'auto',
  },
  table: {
    marginBottom: 20,
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
    fontWeight: 500,
  },
  writeUsMessage: {
    fontSize: 14,
    fontWeight: 600,
    marginRight: 5,
  },
  ...containerStyles,
  ...mapContainerStyles,
});
