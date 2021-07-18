import React, { useContext, useRef } from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

import { StoreCtx } from "../../store";
import { useDelay } from "../../hooks/useDelay";

import s from "./AddTodo.module.scss";

const AddTodo: React.FC = observer(() => {
  const { addItem } = useContext(StoreCtx);

  const [isInvalid, setIsInvalid] = useDelay(3000);

  const inputRef = useRef<HTMLInputElement>(null);

  const addNewItemHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    if (inputRef.current!.value.trim() === "") {
      setIsInvalid(true);
      return;
    }

    addItem(inputRef.current!.value);
    inputRef.current!.value = "";
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
        className={cn(s.addTodo__form, {
          [s.addTodo__form__invalid]: isInvalid,
        })}
        onSubmit={addNewItemHandler}
      >
        <div className={s.addTodo__formControl}>
          <label className={s.addTodo__label} htmlFor="new-todo">
            New todo:
          </label>
          <input
            ref={inputRef}
            className={s.addTodo__input}
            type="text"
            id="new-todo"
            placeholder={inputPlaceholder}
            onFocus={inputFocusHandler}
          />
        </div>
        <button className={s.addTodo__btn} type="submit" disabled={isInvalid}>
          <AddIcon className={s.addTodo__btnIcon} />
        </button>
      </form>
    </section>
  );
});

export default AddTodo;
