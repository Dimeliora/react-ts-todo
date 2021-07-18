import React from "react";
import cn from "classnames";

import TodoItemTitle from "./TodoItemTitle";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { ReactComponent as CheckIcon } from "../../../assets/icons/checkbox.svg";

import s from "./TodosListItem.module.scss";

import { Todo } from "../../../types/todos";

interface TodosListItemProps {
  item: Todo;
}

const TodosListItem: React.FC<TodosListItemProps> = (props) => {
  const { item } = props;

  return (
    <li className={s.todoItem}>
      <div className={s.todoItem__body}>
        <TodoItemTitle value={item.title} onEditModeToggle={() => {}} />
      </div>
      <div className={s.todoItem__controls}>
        <button className={cn(s.todoItem__btn, s.todoItem__btnCheck)}>
          <CheckIcon className={s.todoItem__btnIcon} />
        </button>
        <button className={cn(s.todoItem__btn, s.todoItem__btnRemove)}>
          <TrashIcon className={s.todoItem__btnIcon} />
        </button>
      </div>
    </li>
  );
};

export default TodosListItem;
