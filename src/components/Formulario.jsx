import { useState } from "react";
import useLetras from "../hooks/useLetras";

const Formulario = () => {
    const [busqueda, setBusqueda] = useState({
        artista: "",
        cancion: ""
    })

    const {setAlerta,consultarAPI,setSpinner} = useLetras();



    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(Object.values(busqueda).includes("")){
            setAlerta("Todos los campos son obligatorios");
            return;
        }

        setAlerta("");

       await consultarAPI(busqueda.artista,busqueda.cancion);

       setSpinner(false);
        

    }
  return (
    <form onSubmit={handleSubmit}>
        <legend>Busca por artistas y canciones</legend>
        <div className="form-grid">
            <div>
                <label htmlFor="artista">Nombre Artista</label>
                <input type="text" id="artista" placeholder="Busca por artista" name="artista" value={busqueda.artista} onChange={e=>setBusqueda(
                    {
                        ...busqueda,
                        [e.target.name]: e.target.value
                    }
                )}/>
            </div>
            <div>
            <label htmlFor="cancion">Canción:</label>
            <input type="text" placeholder="Canción" id="cancion" name="cancion" value={busqueda.cancion} onChange={e=>setBusqueda(
                    {
                        ...busqueda,
                        [e.target.name]: e.target.value
                    }
                )}/>
            </div>

            <input type="submit" value="Buscar" />
        </div>
    </form>
  )
}

export default Formulario