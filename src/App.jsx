import { useEffect, useState, useRef } from "react"
import Button from "./components/buttons/Button"


function App() {

  let contador = useRef(0)
  console.log(contador)
  console.log(contador.current)

  function btnPressed(){
    contador.current = contador.current +1
    console.log(contador.current)
  }

  return (
    <>
      <Button btnName="Clicar" onClick={btnPressed}/>

    </>
  )
}

export default App
