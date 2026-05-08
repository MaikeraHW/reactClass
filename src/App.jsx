import Button from "./components/buttons/Button"
import Card from "./components/cards/Card"


function App() {

    const buttons = ["btn01", "btn02", "btn03", "btn04"]

  return (
    <>
      {buttons.map((button, index) => (
        <Button key={index} btnName={button} disabled={index % 2 !== 0 ? true : false} />
      ))}
      
      <Card title="Title -1" description="Description -1"/>
    </>
  )
}

export default App
