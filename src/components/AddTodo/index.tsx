import React, { useContext, useRef } from "react";
import { observer } from "mobx-react-lite";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

import { StoreCtx } from "../../store";

import s from "./AddTodo.module.scss";

const AddTodo: React.FC = observer(() => {
  const { addItem } = useContext(StoreCtx);

  const inputRef = useRef<HTMLInputElement>(null);

  const addNewItemHandler = (e: React.FormEvent): void => {
    e.preventDefault();

    addItem(inputRef.current!.value);
    inputRef.current!.value = "";
  };

  return (
    <section className={s.addTodo}>
      <form className={s.addTodo__form} onSubmit={addNewItemHandler}>
        <div className={s.addTodo__formControl}>
          <label className={s.addTodo__label} htmlFor="new-todo">
            New todo:
          </label>
          <input
            ref={inputRef}
            className={s.addTodo__input}
            type="text"
            id="new-todo"
            placeholder="Type new todo here"
          />
        </div>
        <button className={s.addTodo__btn} type="submit">
          <AddIcon className={s.addTodo__btnIcon} />
        </button>
      </form>
    </section>
  );
});

export default AddTodo;
