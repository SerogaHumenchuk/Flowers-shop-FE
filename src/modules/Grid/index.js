import { connect } from 'react-redux';
import { View } from './view';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { selector } from './selectors';
import { styles } from './styles';
import { updateFilteredListOfGoods } from '../../redux/Catalog/actions';

const mapDispatchToProps = {
  updateFilteredListOfGoods,
};

export const Grid = compose(
  connect(selector, mapDispatchToProps),
  withStyles(styles),
  withRouter,
)(View);
