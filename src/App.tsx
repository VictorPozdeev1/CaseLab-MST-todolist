import { observer } from "mobx-react-lite";
import { rootStore } from "./store/index";

const App = observer((props) => {
  return (
    <div>
      {Array.from(rootStore.todos.values()).map((todo) => (
        <p>{todo.title}</p>
      ))}
    </div>
  );
});

export default App;
