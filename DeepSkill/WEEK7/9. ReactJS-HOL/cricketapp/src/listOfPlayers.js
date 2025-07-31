import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 65 },
    { name: 'Rahul', score: 45 },
    { name: 'Jadeja', score: 95 },
    { name: 'Hardik', score: 78 },
    { name: 'Shreyas', score: 55 },
    { name: 'Pant', score: 88 },
    { name: 'Ashwin', score: 62 },
    { name: 'Bumrah', score: 71 },
    { name: 'Surya', score: 99 },
    { name: 'Dhoni', score: 100 },
  ];

  const lowScorers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players & Scores</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {lowScorers.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
