import { connect } from 'react-redux';
import { View } from './view';
import { selector } from './selectors';

export const Grid = connect(selector)(View);
