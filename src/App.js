import { useState } from "react";
import fruits from "./fruits";
import "./App.css";

function App() {
  const [query, setQuery] = useState("")
  const listFiltered = fruits.filter(e=>e.includes(query))
  
  const handleQuery = (event) => {
    setQuery(event.target.value)
  }
  console.log(query)

  return (
    <div className="App">
      <label htmlFor="research">Recherche :
        <input type="text" id="research" value={query} onChange={handleQuery} />
      </label>
      <ul>
        {listFiltered.map(e=>(
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
