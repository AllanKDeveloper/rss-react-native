import React from 'react';
import { connect } from 'redux-zero/react';
import actions from '../../actions';
import FeedItem from '../FeedItem';
import Slider from "react-slick";
import './style.css';

class FeedItems extends React.Component {
  render() {
    const { feedItems } = this.props;
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      arrows: true,
      centerPadding: "100px",
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0px",
        }
      }
    ]
    };

    return (
      <div>
        <Slider {...settings}>
          {feedItems.slice(0,5).map((feedItem, i) => (
            <div key={`feed-item-${i}`}>
              <div className="slider-container">
                <h3>
                  <FeedItem
                    title={feedItem.title}
                    url={feedItem.link}
                    date={feedItem.date}
                  />
                </h3>
              </div>
            </div>
          ))}
        </Slider>
        <ul className="feed-items">
          <div className="container"><h3>ÚLTIMAS NOTÍCIAS</h3></div>
          {feedItems.slice(5).map((feedItem, i) => (
            <li key={`feed-item-${i}`} className="feed-items__item">
              <FeedItem
                title={feedItem.title}
                url={feedItem.link}
                contentSnippet={feedItem.contentSnippet}
                date={feedItem.date}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapToProps = ({ feedItems }) => ({ feedItems });

export default connect(mapToProps, actions)(FeedItems);
