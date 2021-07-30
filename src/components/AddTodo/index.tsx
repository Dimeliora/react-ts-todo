import React, { useContext, useRef } from "react";
import cn from "classnames";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

import { StoreCtx } from "../../store";
import { useDelay } from "../../hooks/useDelay";

import s from "./AddTodo.module.scss";

const AddTodo: React.FC = () => {
  const { addItem } = useContext(StoreCtx);

  const [isInvalid, setIsInvalid] = useDelay(3000);

  const inputRef = useRef<HTMLInputElement>(null);

  const addNewItemHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    if (inputRef.current) {
      if (inputRef.current.value.trim() === "") {
        setIsInvalid(true);
        return;
      }

      addItem(inputRef.current.value);
      inputRef.current!.value = "";
    }
  };

  const inputFocusHandler = (): void => {
    setIsInvalid(false);
  };

  let inputPlaceholder = "Type new todo here";
  if (isInvalid) {
    inputPlaceholder = "Must be filled!";
  }

  return (
    <section className={s.addTodo}>
      <form
        className={cn(s.addTodoForm, {
          [s.addTodoFormInvalid]: isInvalid,
        })}
        onSubmit={addNewItemHandler}
      >
        <div className={s.addTodoFormControl}>
          <label className={s.addTodoLabel} htmlFor="new-todo">
            New todo:
          </label>
          <input
            ref={inputRef}
            className={s.addTodoInput}
            type="text"
            id="new-todo"
            placeholder={inputPlaceholder}
            onFocus={inputFocusHandler}
          />
        </div>
        <button
          className={s.addTodoBtn}
          type="submit"
          aria-label="Add todo"
          disabled={isInvalid}
        >
          <AddIcon className={s.addTodoBtnIcon} />
        </button>
      </form>
    </section>
  );
};

export default AddTodo;
