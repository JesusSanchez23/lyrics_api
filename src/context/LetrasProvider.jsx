import axios from "axios";
import { createContext,useState } from "react";

const LetrasContext = createContext();

const LetrasProvider = ({children}) => {

    const [alerta, setAlerta] = useState("");
    const [letra, setLetra] = useState("");
    const [datos, setDatos] = useState({
        artista: "",
        cancion: ""
    });
    const [spinner, setSpinner] = useState(false)

    
    const consultarAPI = async (artista,cancion) => {
        
        try {
        setSpinner(true);
        const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
        const {data} = await axios(url);

        setLetra(data.lyrics);
        setDatos({
            artista: artista,
            cancion: cancion
        })
    } catch (error) {
       setLetra(error.response.status)
    }


    }

    return(
        <LetrasContext.Provider
        value={
            {
                alerta,
                setAlerta,
                consultarAPI,
                letra,
                datos,
                spinner,
                setSpinner
            }
        }>
            {children}
        </LetrasContext.Provider>
    )

}

export {
    LetrasProvider
}

export default LetrasContext;