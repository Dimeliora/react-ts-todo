import React, { useCallback } from "react";

import RadioButton from "./RadioButton";

import s from "./Filter.module.scss";

import { FilterStatus } from "../../types/filter-status";

const STATUS_VALUES: FilterStatus[] = ["all", "done", "left"];

const Filter: React.FC = () => {
  const filterStatusChangeHandler = useCallback((): void => {}, []);

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
        />
      </div>
      <div className={s.filter__byStatus}>
        <h2 className={s.filter__byStatus__heading}>Filter by status:</h2>
        <div className={s.filter__byStatus__inputs}>
          {STATUS_VALUES.map((status) => (
            <RadioButton
              key={status}
              value={status}
              checked={false}
              classname={s.filter__byStatus__item}
              onChange={filterStatusChangeHandler}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filter;
