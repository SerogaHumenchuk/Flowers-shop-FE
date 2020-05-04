import { connect } from 'react-redux';
import { compose } from 'redux';
import { View } from './view';
import { withStyles, withWidth } from '@material-ui/core';
import { styles } from './styles';
import { toggleDrawer } from '../../redux/General/actions';
import { selector } from './selectors';

const mapDispatchToProps = {
  toggleDrawer,
};

export const Header = compose(
  connect(selector, mapDispatchToProps),
  withStyles(styles),
  withWidth(),
)(View);