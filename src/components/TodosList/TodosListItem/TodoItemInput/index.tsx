import React, { useEffect, useRef } from "react";

import { ReactComponent as ApplyIcon } from "../../../../assets/icons/apply.svg";

import s from "./TodoItemInput.module.scss";

interface TodoItemInputProps {
  value: string;
  onApply: (value: string) => void;
}

const TodoItemInput: React.FC<TodoItemInputProps> = (props) => {
  const { value } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form className={s.todoItemInput}>
      <button className={s.todoItemInput__btn} type="submit">
        <ApplyIcon className={s.todoItemInput__btnIcon} />
      </button>
      <input
        ref={inputRef}
        className={s.todoItemInput__input}
        type="text"
        defaultValue={value}
      />
    </form>
  );
};

export default TodoItemInput;
