import React from "react";

import TodosListItem from "./TodosListItem";

import s from "./TodosList.module.scss";

import { Todo } from "../../types/todos";

const items: Todo[] = [
  { id: 2, title: "PROFIT!!!", completed: false },
  { id: 1, title: "Try it with ReactJS", completed: false },
  { id: 0, title: "Learn TypeScript", completed: true },
];

const TodosList: React.FC = () => {
  const todosListPlaceholder = (
    <h2 className={s.todosList__placeholder}>No todos</h2>
  );

  const todosList = (
    <ul className={s.todosList__element}>
      {items.map((item) => (
        <TodosListItem key={item.id} item={item} isEditing={item.id > 1} />
      ))}
    </ul>
  );

  const hasItems = items.length > 0;

  return (
    <section className={s.todosList}>
      {!hasItems && todosListPlaceholder}
      {hasItems && todosList}
    </section>
  );
};

export default TodosList;
