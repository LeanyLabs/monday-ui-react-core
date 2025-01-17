/* eslint-disable */
/* tslint:disable */
import PropTypes from 'prop-types';
import React from 'react';
const Gallery = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    <path d="M15.8,18.05H3.8A1.74,1.74,0,0,1,2.05,16.3V4.3a.75.75,0,0,1,1.5,0v12a.24.24,0,0,0,.25.25h12a.75.75,0,0,1,0,1.5Z" fill="currentColor" />
    <path d="M15.77,15.05H7.17A2.25,2.25,0,0,1,4.92,12.8V4.2A2.25,2.25,0,0,1,7.17,2h8.6A2.25,2.25,0,0,1,18,4.2v8.6A2.25,2.25,0,0,1,15.77,15.05ZM7.17,3.45a.76.76,0,0,0-.75.75v8.6a.76.76,0,0,0,.75.75h8.6a.76.76,0,0,0,.75-.75V4.2a.76.76,0,0,0-.75-.75Z"
      fill="currentColor" />
    <path d="M6.92 14.83a.75.75 0 01-.53-1.28l6.36-6.31a1.15 1.15 0 011.55 0l3.16 2.42a.74.74 0 01.13 1.05.75.75 0 01-1.05.14l-3-2.28L7.45 14.62A.77.77 0 016.92 14.83zm6.43-6.47h0zM9.3 7.8A1.5 1.5 0 018.24 5.24a1.53 1.53 0 012.12 0 1.5 1.5 0 010 2.12A1.52 1.52 0 019.3 7.8z"
      fill="currentColor" />
  </svg>
);
Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  size: PropTypes.string
}
export default Gallery;
/* tslint:enable */
/* eslint-enable */
