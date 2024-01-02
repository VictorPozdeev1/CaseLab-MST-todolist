import { t } from "mobx-state-tree";

const Todo = t.model({
  id: t.integer,
  title: t.string,
  completed: t.boolean,
});

const Store = t.model({
  todos: t.map(Todo),
});

export const rootStore = Store.create({
  todos: { [1]: { id: 1, title: "First Task", completed: true } },
});
