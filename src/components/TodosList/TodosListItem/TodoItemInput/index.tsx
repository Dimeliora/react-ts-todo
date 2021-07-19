import React, { useEffect, useRef } from "react";
import cn from "classnames";

import { ReactComponent as ApplyIcon } from "../../../../assets/icons/apply.svg";

import { useDelay } from "../../../../hooks/useDelay";

import s from "./TodoItemInput.module.scss";

interface TodoItemInputProps {
  value: string;
  onApply: (value: string) => void;
}

const TodoItemInput: React.FC<TodoItemInputProps> = (props) => {
  const { value, onApply } = props;

  const [isInvalid, setIsInvalid] = useDelay(3000);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const formSubmitHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    if (inputRef.current!.value.trim() === "") {
      setIsInvalid(true);
      return;
    }

    onApply(inputRef.current!.value);
  };

  const inputFocusHandler = (): void => {
    if (isInvalid) {
      setIsInvalid(false);
    }
  };

  let inputPlaceholder = "";
  if (isInvalid) {
    inputPlaceholder = "Must be filled!";
  }

  return (
    <form
      className={cn(s.todoItemInput, {
        [s.todoItemInputInvalid]: isInvalid,
      })}
      onSubmit={formSubmitHandler}
    >
      <button
        className={s.todoItemInputBtn}
        type="submit"
        disabled={isInvalid}
      >
        <ApplyIcon className={s.todoItemInputBtnIcon} />
      </button>
      <input
        ref={inputRef}
        className={s.todoItemInputField}
        type="text"
        defaultValue={value}
        placeholder={inputPlaceholder}
        onFocus={inputFocusHandler}
      />
    </form>
  );
};

export default TodoItemInput;
