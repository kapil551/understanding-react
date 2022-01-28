import './App.css';
import Greet from './components/Greet';
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
      <WithJSX />

      {/* Component code without JSX */}
      <WithoutJSX />


    </div>
  );
}

export default App;
