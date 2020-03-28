import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { View } from './view';

import { styles } from './styles';
import { selector } from './selectors';

export const Gallery = compose(
  connect(selector),
  withRouter,
  withStyles(styles)
)(View);
