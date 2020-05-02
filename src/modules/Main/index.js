import { connect } from 'react-redux';
import { View } from './view';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { selector } from './selectors';
import { styles } from './styles';

import { updateFilteredListOfGoods } from '../../redux/Catalog/actions';
import { toggleDrawer, updateTitle } from '../../redux/General/actions';

const mapDispatchToProps = {
  updateFilteredListOfGoods,
  toggleDrawer,
  updateTitle,
};

export const Main = compose(
  connect(selector, mapDispatchToProps),
  withRouter,
  withStyles(styles),
)(View);
