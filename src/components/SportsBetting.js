import { useEffect, useState } from 'react';

const games = [
  { match: 'Flamengo x Palmeiras' },
  { match: 'Real Madrid x Barcelona' },
  { match: 'PSG x Manchester City' }
];

function generateOdds() {
  return [
    (1.5 + Math.random()).toFixed(2),
    (2.5 + Math.random()).toFixed(2),
    (1.5 + Math.random()).toFixed(2),
  ];
}

export default function SportsBetting() {
  const [oddsList, setOddsList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOddsList(games.map(() => generateOdds()));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">⚽ Apostas Esportivas</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition">
            <h3 className="text-xl font-semibold">{game.match}</h3>
            <p className="mt-2">Odds: {oddsList[i]?.join(' / ')}</p>
            <button className="mt-4 w-full bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-600">
              Apostar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}