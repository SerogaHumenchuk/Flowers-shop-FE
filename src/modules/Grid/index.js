import { connect } from 'react-redux';
import { View } from './view';
import { withStyles } from '@material-ui/core';
import { selector } from './selectors';
import { styles } from './styles';

export const Grid = connect(
  selector,
)(withStyles(styles)(View));
