import LetrasContext from "../context/LetrasProvider";
import { useContext } from "react";

const useLetras = () => {
  return useContext(LetrasContext);
}

export default useLetras