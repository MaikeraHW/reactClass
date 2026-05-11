import { useEffect, useState } from "react"
import Button from "./components/buttons/Button"


function App() {

  const [contador, setContador] = useState("Desligada")
  const [btnName, setBtnName] = useState("Ligar")

  function btnPressed(){
    setContador(contador === "Desligada" ? "Ligada" : "Desligada" )
    setBtnName(btnName === "Ligar" ? "Desligar" : "Ligar")

  }
  useEffect(() => {}, [contador]) 
  //Executa a função quando o elemente é renderizado e a depender do array de dependências. Se estiver vazio, executa sempre que renderizar o componente.
  //Se tiver array de dependencias, executa sempre que o valor dos elementos do array forem alterados
  //Se a função parametro tiver um Return ( () => {} ) - esse return será executado quando o elemento foi removido da tela

  return (
    <>
      <Button btnName={btnName} onClick={btnPressed}/>
      <h1>A luz está {contador}</h1>
    </>
  )
}

export default App
