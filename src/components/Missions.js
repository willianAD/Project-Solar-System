import React from 'react';
import Title from './Title';
import dataMissions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {dataMissions.map((missao) => (
          <MissionCard
            key={ missao.name }
            name={ missao.name }
            year={ missao.year }
            country={ missao.country }
            destination={ missao.destination }
          />))}
      </div>
    );
  }
}

export default Missions;
