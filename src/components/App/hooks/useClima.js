import {useEffect, useReducer} from 'react';
import {API_BASE_URL, API_KEY} from '../../../config';

import {useGeolocationApi} from '../../../__hooks/useGeolocationApi';

import moment from 'moment';

import {initialState, actionTypes, reducer} from '../reducer';

const useClima=()=>{
  const {currentCoords, setCurrentCoords} = useGeolocationApi();
  const [state, dispatch]= useReducer(reducer, initialState);
  const {
    climaActual,
    pronostico,
    isLoading,
    error,
  } =state;

  // Creadores de acciones
  const onSuccess= (clima, pronostico) =>
    dispatch({type: actionTypes.success,
      payload: {climaActual: clima, pronostico: pronostico}},
    );

  const onError=(error) => dispatch({type: actionTypes.error, payload: error});
  const onLoading=()=> dispatch({type: actionTypes.loading});

  useEffect(() =>{
    if (currentCoords) {
      onLoading();
      Promise.all([getClima('weather'), getClima('forecast')])
          .then((values)=>{
            const dataProcesada = getDataProcesada(values[1]);
            onSuccess(values[0], dataProcesada);
          })
          .catch((reason)=>{
            onError(reason);
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
