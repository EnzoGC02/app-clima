import {useEffect, useState} from 'react';

const useGeolocationApi =()=> {
  const [currentCoords, setCurrentCoords]= useState(null);
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
        // success
        (position)=>{
          setCurrentCoords(position.coords);
        },
        // error
        (error)=>{
          console.warn('ERROR(' + error.code + '): ' + error.message);
        },
    );
  }, []);

  return {currentCoords, setCurrentCoords};
};

export {useGeolocationApi};
