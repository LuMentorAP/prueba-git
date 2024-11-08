import { useState, useEffect } from "react";
import UsuariosCard from "./UsuariosCard";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => setUsuarios(data.results));
  }, []);

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.name.first.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (usuarios.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="form-control mb-3"
      />
      <div className="row">
        {usuariosFiltrados.map(usuario => (
          <UsuariosCard
            key={usuario.login.uuid}
            nombre={`${usuario.name.first} ${usuario.name.last}`}
            email={usuario.email}
            imagen={usuario.picture.medium}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
