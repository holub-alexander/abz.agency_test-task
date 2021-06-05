import React from 'react';

const getWindowSize = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState(getWindowSize);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
