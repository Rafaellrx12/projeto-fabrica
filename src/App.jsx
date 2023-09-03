import { useState } from "react";
import Galeria from "./pages/Galeria";
import Home from "./pages/Home";

function App() {
  const [page, setPage] = useState([]);

  function Page() {
    if (page === "home") return <Home />;
    if (page === "galeria") return <Galeria />;
    return <></>;
  }

  return (
    <>
      <header className="principal">
        <h1>Bem-vindo ao Mundo de Star Wars</h1>
        <nav>
          <ul>
            <li>
              <a onClick={() => setPage("home")}>Home</a>
            </li>
            <li>
              <a onClick={() => setPage("galeria")}>Galeria</a>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Page />
      </div>
    </>
  );
}

export default App;
