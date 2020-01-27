import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const DynamicScrollToTop = (props) => {
  useEffect(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (props.history.action === 'POP') {
      return;
    }
    // In all other cases, check fragment/scroll to top
    const { hash } = props.location;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
    else {
      window.scrollTo(0, 0);
    }
  });

  return (
    <div />
  );
};

DynamicScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(DynamicScrollToTop);
