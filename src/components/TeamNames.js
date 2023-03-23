import React from 'react';
import TeamsMarch from '../marchmadnessrc.json';
import '../App.css'

function TeamNames() {
  return (
    <div className='left-column'>
      {TeamsMarch.teams.map((team) => (
        <div>
        <h4 key={team.school}>{team.school}</h4>
        </div>
      ))}
    </div>
  );
}

export default TeamNames;