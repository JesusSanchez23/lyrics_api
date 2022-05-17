import useLetras from "../hooks/useLetras"

const Error = () => {
    const {alerta} = useLetras();
  return (
    <div>{alerta}</div>
  )
}

export default Error