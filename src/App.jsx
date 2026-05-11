import { useEffect, useState } from "react"
import Button from "./components/buttons/Button"


function App() {

  const [contador, setContador] = useState("Desligada")
  useEffect(() => {alert("A luz está: " + contador)}, [contador]) 
  //Executa a função quando o elemente é renderizado e a depender do array de dependências. Se estiver vazio, executa sempre que renderizar o componente.
  //Se tiver array de dependencias, executa sempre que o valor dos elementos do array forem alterados
  //Se a função parametro tiver um Return ( () => {} ) - esse return será executado quando o elemento foi removido da tela

  return (
    <>
      <Button btnName="Incrementar" onClick={() => setContador(contador === "Desligada" ? "Ligada" : "Desligada" )}/>
    </>
  )
}

export default App
