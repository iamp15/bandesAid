import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DatosG1 = ({
  setCargaActual,
  cargaActual,
  proveedor,
  cargas,
  setCargas,
}) => {
  const navigate = useNavigate();

  const guardar = (event) => {
    event.preventDefault();

    const newData = {
      nombre: event.target.nombre.value,
      cedula: event.target.cedula.value,
      marca: event.target.marca.value,
      placa: event.target.placa.value,
      tk: event.target.tk.value,
      provider: proveedor,
    };

    setCargas((prevCargas) =>
      prevCargas.map((carga) =>
        carga.id === cargaActual ? { ...carga, ...newData } : carga
      )
    );

    navigate("/datosg2");
    console.log("guardado");
  };

  // Get the current carga based on cargaActual and proveedor
  const currentCarga = cargas[proveedor]?.[cargaActual] || {};

  return (
    <>
      <h2>Chofer:</h2>
      <form onSubmit={guardar}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          defaultValue={currentCarga?.nombre || ""}
        />
        <br />
        <label htmlFor="placa">Cédula: </label>
        <input
          type="text"
          id="cedula"
          defaultValue={currentCarga?.cedula || ""}
        />
        <br />
        <br />
        <h2>Vehículo:</h2>
        <label htmlFor="marca">Marca: </label>
        <input
          type="text"
          id="marca"
          defaultValue={currentCarga?.marca || ""}
        />
        <br />
        <label htmlFor="placa">Placa: </label>
        <input
          type="text"
          id="placa"
          defaultValue={currentCarga?.placa || ""}
        />
        <br />
        <label htmlFor="tk">Therno King: </label>
        <select name="tk" id="tk" defaultValue={currentCarga?.tk || "si"}>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
        <br />
        <br />
        <Link to={"/carga"}>
          <button onClick={() => setCargaActual(0)}>Atras</button>
        </Link>
        <button type="submit">Continuar</button>
      </form>
    </>
  );
};

export default DatosG1;
