import './App.css' //Avoid using this
import Navigation from './components/navigation'
import HeroSection from './components/hero';
// Global CSS
const App = ()=>{
  return <div>
    <Navigation/>
    <HeroSection/>
  </div>
};

export default App;