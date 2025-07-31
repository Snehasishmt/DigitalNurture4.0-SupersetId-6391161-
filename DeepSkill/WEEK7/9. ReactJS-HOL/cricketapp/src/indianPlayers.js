import React from 'react';

const IndianPlayers = () => {
  const allPlayers = ['Virat', 'Rohit', 'Jadeja', 'Rahul', 'Pant', 'Ashwin'];

  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  const T20players = ['Gill', 'Rinku', 'Iyer'];
  const RanjiTrophyPlayers = ['Pujara', 'Saha', 'Siraj'];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Team Separation</h2>
      <p><strong>Odd Team:</strong> {oddTeam.join(', ')}</p>
      <p><strong>Even Team:</strong> {evenTeam.join(', ')}</p>

      <h3>Merged T20 & Ranji Trophy Players</h3>
      <ul>
        {mergedPlayers.map((player, idx) => (
          <li key={idx}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
