import submitInputVal from './submitInputVal';
import fetchFeedItems from './fetchFeedItems';
import restoreState from './restoreState';
import updateLoadProgress from './updateLoadProgress';

const actions = (store) => ({
  submitInputVal,
  fetchFeedItems,
  restoreState,
  updateLoadProgress,
});

export default actions;
