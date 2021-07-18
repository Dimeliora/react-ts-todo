import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
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
  onCheck: (id: number) => void;
  onRemove: (id: number) => void;
  onUpdate: (id: number, title: string) => void;
  onEdit: (id?: number, ref?: HTMLElement | null) => void;
}

const TodosListItem: React.FC<TodosListItemProps> = observer((props) => {
  const { item, isEditing, onCheck, onRemove, onUpdate, onEdit } = props;

  const listItemRef = useRef<HTMLLIElement>(null);

  const checkClickHandler = (): void => {
    onCheck(item.id);
  };

  const removeClickHandler = (): void => {
    onRemove(item.id);
  };

  const toggleEditModeHandler = (): void => {
    onEdit(item.id, listItemRef.current);
  };

  const itemTitleChangeApplyHandler = (value: string): void => {
    onUpdate(item.id, value);
    onEdit();
  };

  const itemTitle = (
    <>
      <button className={s.todoItem__editBtn} onClick={toggleEditModeHandler}>
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
      ref={listItemRef}
      className={cn(s.todoItem, {
        [s.todoItem__done]: item.completed,
        [s.todoItem__edit]: isEditing,
      })}
    >
      <div className={s.todoItem__body}>
        {!isEditing && itemTitle}
        {isEditing && (
          <TodoItemInput
            value={item.title}
            onApply={itemTitleChangeApplyHandler}
          />
        )}
      </div>
      <div className={s.todoItem__controls}>
        <button
          className={cn(s.todoItem__btn, s.todoItem__btnCheck)}
          onClick={checkClickHandler}
        >
          <CheckIcon className={s.todoItem__btnIcon} />
        </button>
        <button
          className={cn(s.todoItem__btn, s.todoItem__btnRemove)}
          onClick={removeClickHandler}
        >
          <TrashIcon className={s.todoItem__btnIcon} />
        </button>
      </div>
    </li>
  );
});

export default TodosListItem;
