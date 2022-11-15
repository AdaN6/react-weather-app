import Weather from "./components/Weather";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Ada Neo and is open-sourced
          <a href="https://github.com/AdaN6/react-weather-app" target="_blank">
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
