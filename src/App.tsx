
import { Card, CardBody } from "./components/Card"
import { List } from "./components/List"

function App() {

  const arreglo = [ 
    'Manzana',
    'Durazno',
    'Uva',
    'Cereza'
  ]

  return (
    <>
      <Card>
        <CardBody title={"LA VIDA ES BELLA"} text={"La vida es solo un instante"}/>
        <List data = {arreglo} />
      </Card>
    </>
  )
}

export default App
