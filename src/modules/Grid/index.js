import { connect } from 'react-redux';
import { View } from './view';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { selector } from './selectors';
import { styles } from './styles';
import { updateFilteredListOfGoods, handleShowMore } from '../../redux/Catalog/actions';

const mapDispatchToProps = {
  updateFilteredListOfGoods,
  handleShowMore
};

export const Grid = compose(
  connect(selector, mapDispatchToProps),
  withStyles(styles),
  withRouter,
)(View);
