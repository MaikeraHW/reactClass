import Button from "./components/buttons/Button"


function App() {

  var contador = 0

  function decrementar(){
  contador--
  console.log(contador)
  }
  function incrementar(){
  contador++
  console.log(contador)
  }


  return (
    <>
      <Button btnName="Decrementar" aoClique={decrementar}/>
      <h1>{contador}</h1>
      <Button btnName="Incrementar" aoClique={incrementar}/>

    </>
  )
}

export default App
