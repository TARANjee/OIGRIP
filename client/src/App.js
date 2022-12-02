import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Banner from './components/Banner';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Homescreen />
    </div>
  );
}

export default App;
