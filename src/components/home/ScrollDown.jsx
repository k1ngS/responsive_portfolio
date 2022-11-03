import React from 'react';

const ScrollDown = () => {
  return (
    <div className="scrollDown">
      <a href="#about" className="mouseWrapper">
        <span className="homeScroll-name">
          Scroll Down
          <span className="mouse">
            <span className="wheel"></span>
          </span>
        </span>
      </a>
    </div>
  )
}

export default ScrollDown