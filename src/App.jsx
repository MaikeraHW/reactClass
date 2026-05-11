import { useState } from "react"
import Button from "./components/buttons/Button"


function App() {


  const [contador, setContador] = useState(0)

  return (
    <>
      <Button btnName="Decrementar" onClick={() => setContador(contador === 0 ? contador : contador - 1)} disabled={contador === 0 ? true : false}/>
      <h1>{contador}</h1>
      <Button btnName="Incrementar" onClick={() => setContador(contador + 1)} disabled={contador >= 20 ? true : false}/>

    </>
  )
}

export default App
