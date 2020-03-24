import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { View } from './view';

import { styles } from './styles';
import { selector } from './selectors';

export const Gallery = connect(selector)(withStyles(styles)(View));
