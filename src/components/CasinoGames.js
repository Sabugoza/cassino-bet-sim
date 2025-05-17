export default function CasinoGames() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-4">🎮 Jogos de Cassino</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <img src="https://i.imgur.com/1xAbnQD.png" alt="Tigrinho" className="rounded mb-3" />
          <h3 className="text-xl font-semibold">Tigrinho</h3>
          <p>Caça-níquel viciante. Ganhe até x1000!</p>
          <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">Jogar</button>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <img src="https://i.imgur.com/tWM0sKq.png" alt="Aviator" className="rounded mb-3" />
          <h3 className="text-xl font-semibold">Aviator</h3>
          <p>Retire antes do avião sumir!</p>
          <button className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">Jogar</button>
        </div>
      </div>
    </section>
  );
}