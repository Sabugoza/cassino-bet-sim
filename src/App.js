import Header from './components/Header';
import SportsBetting from './components/SportsBetting';
import CasinoGames from './components/CasinoGames';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-6 max-w-6xl mx-auto">
        <SportsBetting />
        <CasinoGames />
      </main>
      <Footer />
    </div>
  );
}

export default App;