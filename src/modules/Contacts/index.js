import { compose } from 'redux';
import { withStyles, withWidth } from '@material-ui/core';
import { styles } from './styles';
import { View } from './view';

export const Contacts = compose(withStyles(styles), withWidth())(View);
