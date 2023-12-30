import { ITodo } from "@/types";
import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      todos: [] as ITodo[],
    };
  },
  getters: {
    getTodos(state): ITodo[] {
      return state.todos;
    },
  },
  mutations: {
    addTodo(state, task: ITodo) {
      state.todos.push(task);
    },
  },
  actions: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-empty-pattern
    getTodoById({}, id: string): ITodo | undefined {
      return this.state.todos.find((todo) => todo.id === id);
    },
  },
  modules: {},
});
