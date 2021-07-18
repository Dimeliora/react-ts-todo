import React, { useState, useContext, useCallback } from "react";
import { observer } from "mobx-react-lite";

import { StoreCtx } from "../../store";

import TodosListItem from "./TodosListItem";

import s from "./TodosList.module.scss";

const TodosList: React.FC = observer(() => {
  const { items, checkItem, removeItem, updateItem } = useContext(StoreCtx);

  const [editItemId, setEditItemId] = useState<number | null>(null);

  const editItemChangeHandler = useCallback(
    (id: number | null = null, ref: HTMLElement | null = null): void => {
      setEditItemId(id);
    },
    []
  );

  const todosListPlaceholder = (
    <h2 className={s.todosList__placeholder}>No todos</h2>
  );

  const todosList = (
    <ul className={s.todosList__element}>
      {items.map((item) => (
        <TodosListItem
          key={item.id}
          item={item}
          isEditing={item.id === editItemId}
          onCheck={checkItem}
          onRemove={removeItem}
          onUpdate={updateItem}
          onEdit={editItemChangeHandler}
        />
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
});

export default TodosList;
