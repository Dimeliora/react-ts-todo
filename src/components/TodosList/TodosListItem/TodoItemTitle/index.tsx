import React from "react";

import { ReactComponent as PencilIcon } from "../../../../assets/icons/pencil.svg";

import s from "./TodoItemTitle.module.scss";

interface TodoItemTitleProps {
  value: string;
  onEditModeToggle: () => void;
}

const TodoItemTitle: React.FC<TodoItemTitleProps> = (props) => {
  const { value, onEditModeToggle } = props;

  return (
    <>
      <button className={s.todoItemTitle__btn} onClick={onEditModeToggle}>
        <PencilIcon className={s.todoItemTitle__btnIcon} />
      </button>
      <div className={s.todoItemTitle__text}>{value}</div>
    </>
  );
};

export default TodoItemTitle;
