import './App.css';
import Greet from './components/Greet';
import User from './components/User';
import Welcome from './components/Welcome';
import WithJSX from './components/WithJSX';
import WithoutJSX from './components/WithoutJSX';

function App() {
  return (
    <div className="App">

      {/* functional component */}
      {/* <Greet /> */}

      {/* class component */}
      {/* <Welcome /> */}

      {/* Component code with JSX */}
      {/* <WithJSX /> */}

      {/* Component code without JSX */}
      {/* <WithoutJSX /> */}

      {/* Passing Props to a component */}
      <User name="Clark" heroName="Superman" >
        <p> 
          Superpower: flight, superhuman strength, x-ray vision, heat vision, cold breath, super-speed, enhanced hearing, and nigh-invulnerability.
        </p> 
      </User>
      <User name="Bruce" heroName="Batman" >
        <button> Call Batmobile </button> 
      </User>
      <User />
      <User name="Diana" heroName="Wonder Woman" />


    </div>
  );
}

export default App;
