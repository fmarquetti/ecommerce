import NavBar from '../src/components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting ="Kirana, organización de eventos"/>
    </div>
  );
}

export default App;
