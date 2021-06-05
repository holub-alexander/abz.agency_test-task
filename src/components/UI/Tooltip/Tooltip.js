import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

const Tooltip = ({ type, dataFor }) => {
  return (
    <>
      {type === 'normal' ? (
        <ReactTooltip
          id={dataFor}
          delayHide={300}
          effect="float"
          place="bottom"
          className="tooltip"
        />
      ) : null}
    </>
  );
};

Tooltip.propTypes = {
  type: PropTypes.oneOf(['normal']).isRequired,
  dataFor: PropTypes.string.isRequired,
};

export default Tooltip;
