import { TodoType } from "../store";

type TodoProps = { todo: TodoType };

export const Todo = ({ todo }: TodoProps) => {
  return (
    <div>
      <p>
        {todo.title} completed: {todo.completed.toString()}
      </p>
    </div>
  );
};
