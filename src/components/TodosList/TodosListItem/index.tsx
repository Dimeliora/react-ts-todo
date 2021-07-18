import React from "react";
import cn from "classnames";

import TodoItemInput from "./TodoItemInput";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { ReactComponent as CheckIcon } from "../../../assets/icons/checkbox.svg";
import { ReactComponent as PencilIcon } from "../../../assets/icons/pencil.svg";

import s from "./TodosListItem.module.scss";

import { Todo } from "../../../types/todos";

interface TodosListItemProps {
  item: Todo;
  isEditing: boolean;
}

const TodosListItem: React.FC<TodosListItemProps> = (props) => {
  const { item, isEditing } = props;

  const itemTitle = (
    <>
      <button className={s.todoItem__editBtn} onClick={() => {}}>
        <PencilIcon className={s.todoItem__editBtnIcon} />
      </button>
      <div
        className={cn({
          [s.todoItem__titleCompleted]: item.completed,
        })}
      >
        {item.title}
      </div>
    </>
  );

  return (
    <li
      className={cn(s.todoItem, {
        [s.todoItem__done]: item.completed,
        [s.todoItem__edit]: isEditing,
      })}
    >
      <div className={s.todoItem__body}>
        {!isEditing && itemTitle}
        {isEditing && <TodoItemInput value={item.title} onApply={() => {}} />}
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
