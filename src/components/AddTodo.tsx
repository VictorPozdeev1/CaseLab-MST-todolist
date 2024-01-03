import { useState } from "react";
import { TodoType, rootStore } from "../store";

export const AddTodo = () => {
  const [title, setTitle] = useState<string>();
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "0.5rem",
          backgroundColor: "darkseagreen",
        }}
      >
        <input
          style={{ width: "100%", marginRight: "0.5rem" }}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={() => {
            if (!title) return;
            rootStore.todos.add(title);
            setTitle("");
          }}
        >
          Add!
        </button>
      </div>
    </>
  );
};
