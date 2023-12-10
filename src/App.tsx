import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const items=[
    'New York',
    'San Francisco',
    'Tokyo',
    'Paris'
];

const [alertVisible, setAlertVisible]=useState(false);
  return <div>
            <div>
              <ListGroup items={items} heading="Cities" />
            </div>
            <div>
              {alertVisible && <Alert onClose={()=>setAlertVisible(false)}>My Alert</Alert>}
              <Button color="primary" onClick={()=>setAlertVisible(true)}>
                My button
              </Button>
            </div>
        </div>
}

export default App