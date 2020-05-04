import { connect } from 'react-redux';
import { View } from './view';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { selector } from './selectors';
import { styles } from './styles';
import { fetchCatalog, updateFilteredListOfGoods } from '../../redux/Catalog/actions';

const mapDispatchToProps = {
  updateFilteredListOfGoods,
  fetchCatalog,
};

export const Main = compose(
  connect(selector, mapDispatchToProps),
  withStyles(styles),
)(View);
