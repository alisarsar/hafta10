import React from "react";
import Todos from "./Todos"

function App() {
  
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  //  setTodos([...todos, "Yapılacak iş 3"])
  }

  return (
    <>
      <Todos todos={todos} />

      <hr />

      <div>
        Sayaç: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )

}

export default App;
