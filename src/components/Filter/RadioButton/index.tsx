import React from "react";
import cn from 'classnames'

import s from "./RadioButton.module.scss";

import { FilterStatus } from "../../../types/filter-status";

interface RadioButtonProps {
  value: FilterStatus;
  checked: boolean;
  classname: string;
  onChange: (value: FilterStatus) => void;
}

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const { value, checked, classname, onChange } = props;

  const radioChangeHandler = (): void => {
    onChange(value);
  };

  return (
    <div className={cn(s.radioButton, classname)}>
      <input
        className={s.radioButtonInput}
        type="radio"
        name="filter-status"
        id={`filter-${value}`}
        value={value}
        checked={checked}
        onChange={radioChangeHandler}
      />
      <label className={s.radioButtonLabel} htmlFor={`filter-${value}`}>
        {value}
      </label>
    </div>
  );
};

export default RadioButton;
