import { observable, asMap } from 'utils';
import data from './data';
import ui from './ui';
import user from './user';

export default observable({
  forms: asMap(),
  messages: asMap(),
  data,
  user,
  ui,
});
