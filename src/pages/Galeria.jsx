import { useState, useEffect } from "react";

function Galeria() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((Response) => Response.json())
      .then((data) => setDados(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {dados.map((item) => (
        <div className="galeria" key={item.id}>
          <h2>{item.name}</h2>
          <ul>
            <li>Peso: {item.mass}</li>
            <li>Cor de Cabelo: {item.hair_color}</li>
            <li>Cor da Pele{item.skin_color}</li>
            <li>Cor dos Olhos{item.eye_color}</li>
            <li>Aniversario:{item.birth_year}</li>
            <li>Genêro{item.gender}</li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default Galeria;
