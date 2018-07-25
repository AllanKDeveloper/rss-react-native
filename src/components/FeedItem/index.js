import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class FeedItem extends React.Component {
  state = {
    text: 'none',
  }

  alreadyClicked = () => {
    this.setState({
      text: 'line-through',
    });
  }

  render() {
    const { title, url, contentSnippet, date } = this.props;

    return (
      <a className="feed-item" href={url} target="_blank" onClick={this.alreadyClicked}>
        <div className="container">
          <h3 className="feed-item__name" style={{textDecoration: this.state.text}}>{title}</h3>
          <p className="feed-item__desc">{contentSnippet}</p>
          <p className="feed-item__meta">{date}</p>
        </div>
      </a>
    );
  }
}

FeedItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default FeedItem;
