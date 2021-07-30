import { makeAutoObservable, reaction } from "mobx";
import { v4 as uuidv4 } from "uuid";

import { Todo } from "../types/todos";
import { FilterStatus } from "../types/filter-status";

export class Todos {
  items: Todo[] = [];
  filterTemplate: string = "";
  filterStatus: FilterStatus = "all";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.getItemsFromLS();
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

  private getItemsFromLS(): void {
    const storedItems = localStorage.getItem("todos");

    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  private findItem(id: string): Todo | void {
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
      id: uuidv4(),
      title,
      completed: false,
    };

    this.items.unshift(newTodo);
  }

  checkItem(id: string): void {
    const found = this.findItem(id);
    if (found) {
      found.completed = !found.completed;
    }
  }

  removeItem(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  updateItem(id: string, title: string): void {
    const found = this.findItem(id);
    if (found) {
      found.title = title;
    }
  }
}

export const todos = new Todos();

reaction(
  () => JSON.stringify(todos.items),
  (serializedItems) => {
    localStorage.setItem("todos", serializedItems);
  }
);
