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
      <div className={s.filterByTitle}>
        <label className={s.filterByTitleLabel} htmlFor="filter-title">
          Filter by title:
        </label>
        <input
          className={s.filterByTitleInput}
          type="text"
          id="filter-title"
          placeholder="Type title to filter"
          value={filterTemplate}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={s.filterByStatus}>
        <h2 className={s.filterByStatusHeading}>Filter by status:</h2>
        <div className={s.filterByStatusInputs}>
          {STATUS_VALUES.map((status) => (
            <RadioButton
              key={status}
              value={status}
              checked={filterStatus === status}
              classname={s.filterByStatusItem}
              onChange={filterStatusChangeHandler}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Filter;
