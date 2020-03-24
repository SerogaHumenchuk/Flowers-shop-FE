import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { View } from './view';

import { styles } from './styles';
import { selector } from '../GridCards/selectors';

export const GridCards = connect(selector)(withStyles(styles)(View));
