import { connect } from 'react-redux';
import { View } from './view';
import { withStyles } from '@material-ui/core';
import { styles } from './styles';
import { toggleDrawer } from '../../redux/General/actions';
import { selector } from './selectors';

const mapDispatchToProps = {
  toggleDrawer,
};

export const Header = connect(
  selector,
  mapDispatchToProps,
)(withStyles(styles)(View));