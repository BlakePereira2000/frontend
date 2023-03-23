import React from 'react';
import TeamsMarch from '../marchmadnessrc.json';

function Teams() {
  return (
    <div className='card'>
      {TeamsMarch.teams.map((team) => (
        <div>
        <h2 key={team.school}>{team.school}</h2>
        <p key={team.name}>Mascot: {team.name}</p>
        <p>Location: {team.city}, {team.state}</p>
        </div>
      ))}
    </div>
  );
}

export default Teams;