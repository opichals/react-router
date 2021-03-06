import React from 'react';
import { component } from './PropTypes';
import Link from './Link';

var IndexLink = React.createClass({
 
  render() {
    return <Link {...this.props} onlyActiveOnIndex={true} />
  }

});

export default IndexLink;
