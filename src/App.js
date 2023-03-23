import MyHeader from './components/MyHeader';
import './App.css';
import Teams from './components/Teams';
import TeamNames from './components/TeamNames'

function App() {
  // this code takes in two components one for the header of the page and the other to show the team cards
  return (
    <div className="App">
      <MyHeader/>
      <div className="left-column">
        <TeamNames/>
      </div>
      <div className="right-column">
        <Teams/>
      </div>
    </div>
  );
}

export default App;
