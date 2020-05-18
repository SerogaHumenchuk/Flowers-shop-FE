import { connect } from 'react-redux';
import { View } from './view';
import { withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { selector } from './selectors';
import { styles } from './styles';
import { fetchCatalog } from '../../redux/Catalog/actions';

const mapDispatchToProps = {
  fetchCatalog,
};

export const Catalog = compose(
  connect(selector, mapDispatchToProps),
  withStyles(styles),
)(View);
