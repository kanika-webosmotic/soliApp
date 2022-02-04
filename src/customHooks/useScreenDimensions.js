import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export const useScreenDimensions = () => {
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const onChange = result => {
      setScreenData(result.screen);
    };

    const unsubscribe = Dimensions.addEventListener('change', onChange);
    console.log({unsubscribe});
    return () => unsubscribe.remove();
  });

  return {
    ...screenData,
    isLandscape: screenData.width > screenData.height,
  };
};
