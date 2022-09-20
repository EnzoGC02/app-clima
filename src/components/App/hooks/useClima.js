import {useEffect, useState} from 'react';
import {API_BASE_URL, API_KEY} from '../../../config';

import {useGeolocationApi} from '../../../__hooks/useGeolocationApi';

import moment from 'moment';


const useClima=()=>{
  const {currentCoords, setCurrentCoords} = useGeolocationApi();
  const [climaActual, setClimaActual] = useState(null);
  const [pronostico, setPronostico] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() =>{
    if (currentCoords) {
      setIsLoading(true);
      Promise.all([getClima('weather'), getClima('forecast')])
          .then((values)=>{
            setClimaActual(values[0]);
            const dataProcesada = getDataProcesada(values[1]);
            setPronostico(dataProcesada);
            setIsLoading(false);
          })
          .catch((reason)=>{
            setError(error);
            console.log(reason);
          });
    }
  }, [currentCoords]);

  const getClima = async (tipoConsulta) => {
    const {latitude, longitude} = currentCoords;
    const response = fetch(
        `${API_BASE_URL}/data/2.5/${tipoConsulta}`+
        `?lat=${latitude}&lon=${longitude}`+
        `&units=metric&lang=es&appid=${API_KEY}`,
    );
    return (await response).json();
  };

  const getDataProcesada = (pronosticoData) => {
    const {list} = pronosticoData;

    // Elimiamos elementos del dia actual
    const currentDateString = moment().format('YYYY-MM-DD');

    const listFilter = list.filter((item) => {
      return !item.dt_txt.includes(currentDateString);
    });
    let initialIndex = 0;
    let lastIndex = 8;
    const newArray = [];
    while (initialIndex < listFilter.length) {
      // creamos un arreglo con los datos de un dia
      const dayData = listFilter.slice(initialIndex, lastIndex);
      // Obtenemos el objeto con la temperatura maxima del dia
      const max = dayData.reduce((valuePrev, valueActual) => {
        return valuePrev.main.temp_max > valueActual.main.temp_max?
        valuePrev:
        valueActual;
      });
      // insertamos en el nuevo arreglo
      newArray.push(max);
      // actualizamos los indices
      initialIndex = lastIndex;
      lastIndex = lastIndex + 8;
    }
    return newArray;
  };

  const handleSetCurrentCoords = (coords) => {
    setCurrentCoords(coords);
  };

  return {climaActual, pronostico, isLoading, error, handleSetCurrentCoords};
};

export default useClima;
