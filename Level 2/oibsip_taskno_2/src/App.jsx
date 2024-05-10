import './App.css';
import HeroSection from './components/HeroSection';
import Filmography from './components/Filmography';
import ImpactAndLegacy from './components/ImpactAndLegacy';
import About from './components/About';

function App() {
	return (
		<>
			<HeroSection/>
			<About/>
			<Filmography/>
			<ImpactAndLegacy/>
		</>
	);
}

export default App;