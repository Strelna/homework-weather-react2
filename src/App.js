import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
     <h1>Weather app</h1>
     <Weather />
     <footer>
This project is created by <a href='https://www.linkedin.com/in/olena-dudnyk/' target='_blank' rel="noreferrer">Dudnyk Olena</a> and it's{" "}
     <a href='https://github.com/Strelna/homework-weather-react2' target='_blank' rel="noreferrer">open-sourced on GitHub</a>
     </footer>
    </div></div>
  );
}

