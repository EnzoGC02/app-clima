import React from 'react';
import './App.css';

// importamos componentes
import Header from '../Header';
import Select from '../Select';
import Clima from '../Clima';
import Pronostico from '../Pronostico';
import PronosticoItem from '../PronosticoItem';
import Loading from '../Loading';
import Title from '../TItle';
import Footer from '../Footer';
import HeaderLocation from '../HeaderLocation';
import HeaderSelect from '../HeaderSelect';
import ClimaInfo from '../ClimaInfo';
import ClimaDetalles from '../ClimaDetalles';

// hooks
import useClima from './hooks/useClima';

// utils
import {ciudades} from '../../__utils/data';
import {getDateFormated} from '../../__utils/functions';

const App = () => {
  const {error, isLoading, climaActual, pronostico, handleSetCurrentCoords} =
    useClima();

  const handleChangeSelect = (e) => {
    const ciudad = ciudades.find((c) => c.pais.value === e.target.value);
    handleSetCurrentCoords(ciudad.coordenadas);
  };

  const fechaActual=() =>{
    const {sys} = climaActual;
    const ciudad= ciudades.find((c) => c.pais.value === sys.country);
    const date= new Date();
    const fecha=getDateFormated(date, ciudad);
    const hora= getDateFormated(date, ciudad, true);
    return {
      fecha,
      hora,
    };
  };
  return (
    <>
      <Header>
        <section className="header__subnav">
          <HeaderLocation climaActual={climaActual}
          />
          <HeaderSelect>
            <Select onChange={handleChangeSelect}>
              <option value="DEFAULT" disabled>
                Seleccionar una ciudad
              </option>
              {ciudades.map((c) => (
                <option key={c.pais.value} value={c.pais.value}>
                  {`${c.name}, ${c.pais.name}`}
                </option>
              ))}
            </Select>
          </HeaderSelect>
        </section>
      </Header>
      <Title>
        <h1 className="title">Clima actual:</h1>
      </Title>
      {climaActual && (
        <Clima
          error={error}
          isLoading={isLoading}
        >
          {
            <>
              <ClimaInfo climaActual={climaActual} {...fechaActual()}/>
              <ClimaDetalles climaActual={climaActual}/>
            </>
          }
        </Clima>
      )}
      <Title>
        <h1 className="title">Pronostico a 5 dias:</h1>
      </Title>
      {pronostico && (
        <Pronostico error={error} isLoading={isLoading}>
          {pronostico.map((p) => (
            <PronosticoItem key={p.dt} data={p} />
          ))}
        </Pronostico>
      )}
      <Footer />
      {isLoading && <Loading />}
    </>
  );
};

export default App;
