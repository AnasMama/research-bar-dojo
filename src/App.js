import "./App.css";
// Importer ma liste complète de fruits

function App() {
  return (
    <div className="App">
      <label htmlFor="research">Recherche :
        <input type="text" id="research"/>
      </label>
      <ul>
        {/* Afficher ma liste de fruit ici */}
      </ul>
    </div>
  );
}

export default App;
