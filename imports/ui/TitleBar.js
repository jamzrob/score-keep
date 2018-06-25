
import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if(this.props.sub){
      return <h2 className="title-bar__subtitle">{this.props.sub}</h2>;
    }
  }
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.string
};

TitleBar.defaultProps = {
  //title: 'Default Title'
}
