import { observer } from "mobx-react-lite";
import { TodoType } from "../store";

type TodoProps = { todo: TodoType };

export const Todo = observer(({ todo }: TodoProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "0.5rem",
          backgroundColor: "lightblue",
        }}
      >
        <span style={{ flexGrow: 1 }}>{todo.title}</span>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => {
            todo.toggle();
          }}
        />
      </div>
    </>
  );
});
