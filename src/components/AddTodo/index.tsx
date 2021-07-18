import React from "react";

import { ReactComponent as AddIcon } from "../../assets/icons/add.svg";

import s from "./AddTodo.module.scss";

const AddTodo: React.FC = () => {
  return (
    <section className={s.addTodo}>
      <form className={s.addTodo__form}>
        <div className={s.addTodo__formControl}>
          <label className={s.addTodo__label} htmlFor="new-todo">
            New todo:
          </label>
          <input
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
};

export default AddTodo;
