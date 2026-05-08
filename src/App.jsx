import Button from "./components/buttons/Button"
import Card from "./components/cards/Card"


function App() {

  return (
    <>
      <Button btnName="btn01" disabled={false}/>
      <Button btnName="btn02" disabled/>
      <Button btnName="btn03" disabled/>
      <Card title="Title -1" description="Description -1"/>
    </>
  )
}

export default App
