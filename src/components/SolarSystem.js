import React from 'react';
import Title from './Title';
import dataPlanets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {dataPlanets.map((planeta) => (
          <PlanetCard
            key={ planeta.name }
            planetName={ planeta.name }
            planetImage={ planeta.image }
          />))}
      </div>
    );
  }
}

export default SolarSystem;
