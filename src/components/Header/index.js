import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import { FeedAdder, ProgressBar } from '../../components';
import { getLocalStorage } from '../../helpers';
import './style.css';

class Header extends React.Component {
  componentDidMount() {
    const { restoreState, fetchFeedItems, updateLoadProgress } = this.props;
    const savedState = getLocalStorage();

    if (savedState && typeof savedState === 'object') {
      restoreState(savedState);
      fetchFeedItems(updateLoadProgress);
    }
  }

  render() {
    const { loadProgress } = this.props;

    return (
      <header className="header">
        <FeedAdder />
        <div className="header__progress-container">
          <ProgressBar progress={loadProgress} />
        </div>
      </header>
    );
  }
}

const mapToProps = ({
  loadProgress,
  restoreState,
  fetchFeedItems,
  updateLoadProgress,
}) => ({
  loadProgress,
  restoreState,
  fetchFeedItems,
  updateLoadProgress,
});

export default connect(mapToProps, actions)(Header);
