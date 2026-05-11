import { useState } from "react"
import Button from "./components/buttons/Button"


function App() {

  // => use state retorna um array com: valor inicial [index 0] e uma função [index 1], a função é o que vai substituir o index 0 e renderizar os componentes que usam o valor
  // => forma padrão de uso [umNome(valor inicial), setUmnome] = useState(valor inicial)
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
