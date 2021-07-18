import { makeAutoObservable } from "mobx";

import { Todo } from "../types/todos";
import { FilterStatus } from "../types/filter-status";

const MOCK_TODOS: Todo[] = [
  { id: 2, title: "PROFIT!!!", completed: false },
  { id: 1, title: "Try it with ReactJS", completed: false },
  { id: 0, title: "Learn TypeScript", completed: true },
];

export class Todos {
  items: Todo[] = MOCK_TODOS;
  filterTemplate: string = "";
  filterStatus: FilterStatus = "all";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get totalItemsAmount(): number {
    return this.items.length;
  }

  get leftItemsAmount(): number {
    return this.items.filter((item) => !item.completed).length;
  }

  get itemsByTitle(): Todo[] {
    const trimmedTemplate = this.filterTemplate.trim();

    if (trimmedTemplate === "") {
      return this.items;
    }

    return this.items.filter((item) =>
      item.title.toLowerCase().includes(trimmedTemplate.toLowerCase())
    );
  }

  get filteredItems(): Todo[] {
    if (this.filterStatus === "all") {
      return this.itemsByTitle;
    }

    if (this.filterStatus === "done") {
      return this.itemsByTitle.filter((item) => item.completed);
    }

    return this.itemsByTitle.filter((item) => !item.completed);
  }

  private findItem(id: number): Todo | void {
    return this.items.find((item) => item.id === id);
  }

  changeFilterTemplate(value: string): void {
    this.filterTemplate = value;
  }

  changeFilterStatus(value: FilterStatus): void {
    this.filterStatus = value;
  }

  addItem(title: string): void {
    const newTodo: Todo = {
      id: +Math.random().toFixed(7).slice(2),
      title,
      completed: false,
    };

    this.items.unshift(newTodo);
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
