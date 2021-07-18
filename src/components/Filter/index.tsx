import React, { useContext, useCallback } from "react";
import { observer } from "mobx-react-lite";

import { StoreCtx } from "../../store";

import RadioButton from "./RadioButton";

import s from "./Filter.module.scss";

import { FilterStatus } from "../../types/filter-status";

const STATUS_VALUES: FilterStatus[] = ["all", "done", "left"];

const Filter: React.FC = observer(() => {
  const {
    filterTemplate,
    filterStatus,
    changeFilterTemplate,
    changeFilterStatus,
  } = useContext(StoreCtx);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    changeFilterTemplate(e.target.value);
  };

  const filterStatusChangeHandler = useCallback(
    (status: FilterStatus): void => {
      changeFilterStatus(status);
    },
    [changeFilterStatus]
  );

  return (
    <section className={s.filter}>
      <div className={s.filter__byTitle}>
        <label className={s.filter__byTitle__label} htmlFor="filter-title">
          Filter by title:
        </label>
        <input
          className={s.filter__byTitle__input}
          type="text"
          id="filter-title"
          placeholder="Type title to filter"
          value={filterTemplate}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={s.filter__byStatus}>
        <h2 className={s.filter__byStatus__heading}>Filter by status:</h2>
        <div className={s.filter__byStatus__inputs}>
          {STATUS_VALUES.map((status) => (
            <RadioButton
              key={status}
              value={status}
              checked={filterStatus === status}
              classname={s.filter__byStatus__item}
              onChange={filterStatusChangeHandler}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Filter;
