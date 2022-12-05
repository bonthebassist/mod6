import './App.css';
import Fetcher from './components/FetchComponent';
import { GreetingButtonComponent } from './components/GreetingButtonComponent';
import GreetingComponent from './components/GreetingComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GreetingComponent name="Bonnie"></GreetingComponent>
        <GreetingButtonComponent name="Bonnie"></GreetingButtonComponent>
        <Fetcher></Fetcher>
      </header>
    </div>
  );
}

export default App;
