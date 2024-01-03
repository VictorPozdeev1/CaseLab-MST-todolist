import { Instance, applySnapshot, flow, getSnapshot, t } from "mobx-state-tree";

const TodoModel = t
  .model({
    id: t.integer,
    title: t.string,
    completed: t.boolean,
  })
  .actions((self) => ({
    toggle() {
      console.log("toggle called, old value:", self.completed);
      self.completed = !self.completed;
    },
  }));

export type TodoType = Instance<typeof TodoModel>;

const TodosStore = t
  .model({ rawData: t.map(TodoModel) })
  .actions((self) => ({
    load: flow(function* todosLoader() {
      try {
        const loadedTodos = yield fetch(
          "https://jsonplaceholder.typicode.com/todos"
        )
          .then((response) => response.json())
          .then((todosArray) =>
            (todosArray as Array<TodoType>).reduce((a, c, i) => {
              a[i] = c;
              return a;
            }, {} as { [key: string]: {} })
          );
        applySnapshot(self, { rawData: loadedTodos });
      } catch (e) {
        console.error(e);
        alert(e);
      }
    }),
    add(title: string, completed: boolean = false) {
      const newId = Date.now();
      self.rawData.set(
        newId,
        TodoModel.create({ id: newId, title, completed })
      );
    },
  }))
  .views((self) => ({
    getAll() {
      return Array.from(self.rawData.values());
    },
  }));

const RootStore = t.model({
  todos: t.optional(TodosStore, {}),
});

const rootStore = RootStore.create();
rootStore.todos.load();
export { rootStore };
