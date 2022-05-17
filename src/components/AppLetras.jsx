import Formulario from "./Formulario";
import useLetras from "../hooks/useLetras";
import Spinner from "./Spinner";

const AppLetras = () => {
const {alerta,letra,datos,spinner} = useLetras();

  return (
      <>
    <header>Busqueda de letras de canciones</header>
    <Formulario/>
    <main>

    {spinner ? <Spinner/> : <>
    {alerta ? <p className="alerta">{alerta}</p> : ''}

    {letra !== 404 && letra !== '' ? 
    <>
    <h2>Letra de la canción: {datos.cancion}</h2>
    <h2>Artista: {datos.artista}</h2>
    <p className="letra">{letra}</p>
    </>
    :
    letra === 404 && <p className="alerta">No se ha encontrado la canción</p>}
    
    </> }    
    </main>
      </>

  )
}

export default AppLetras