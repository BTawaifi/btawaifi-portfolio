import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="skip-link"
      style={{
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: '#007bff',
        color: 'white',
        padding: '8px',
        textDecoration: 'none',
        zIndex: 1000,
        borderRadius: '4px',
        fontSize: '14px'
      }}
      onFocus={(e) => {
        e.target.style.top = '6px';
      }}
      onBlur={(e) => {
        e.target.style.top = '-40px';
      }}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink; 