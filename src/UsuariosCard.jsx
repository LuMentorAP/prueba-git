function UsuariosCard({ nombre, email, imagen }) {
    return (
      <div className="col-12 col-md-4">
        <div className="card">
          <img src={imagen} alt="avatar" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{email}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default UsuariosCard;
  