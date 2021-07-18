import { makeAutoObservable } from "mobx";

import { Todo } from "../types/todos";

const MOCK_TODOS: Todo[] = [
  { id: 2, title: "PROFIT!!!", completed: false },
  { id: 1, title: "Try it with ReactJS", completed: false },
  { id: 0, title: "Learn TypeScript", completed: true },
];

export class Todos {
  items: Todo[] = MOCK_TODOS;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get totalItemsAmount(): number {
    return this.items.length;
  }

  get leftItemsAmount(): number {
    return this.items.filter((item) => !item.completed).length;
  }

  private findItem(id: number): Todo | void {
    return this.items.find((item) => item.id === id);
  }

  checkItem(id: number): void {
    const found = this.findItem(id);
    if (found) {
      found.completed = !found.completed;
    }
  }

  removeItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  updateItem(id: number, title: string): void {
    const found = this.findItem(id);
    if (found) {
      found.title = title;
    }
  }
}
