import { observer } from "mobx-react-lite";
import { rootStore } from "./store/index";

import { Todo } from "./components/Todo";
import { useEffect } from "react";

const App = observer((props) => {
  return (
    <div style={{ width: "600px", margin: "0 auto", padding: "2rem" }}>
      {rootStore.todos.getAll().map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
});

export default App;
