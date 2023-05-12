import '../src/styles/App.css';
import Homepage from '../src/pages/home/home.jsx';
import AOS from 'aos';
AOS.init();

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
