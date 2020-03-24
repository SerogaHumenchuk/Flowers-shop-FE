import { View } from './view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core';
import { styles } from './styles';
import { selector } from './selectors';
import { updateFilteredListOfGoods } from '../../redux/Catalog/actions';
import { toggleDrawer, updateTitle } from '../../redux/General/actions';

const mapDispatchToProps = {
  updateFilteredListOfGoods,
  toggleDrawer,
  updateTitle,
};

export const Drawer = compose(
  connect(selector, mapDispatchToProps),
  withRouter,
  withStyles(styles),
)(View);
