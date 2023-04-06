import React from 'react';

const GoToTopButton = () => {
  /**Handler **/
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return <button onClick={handleClick}>Idź do góry</button>;
};

export default GoToTopButton;
