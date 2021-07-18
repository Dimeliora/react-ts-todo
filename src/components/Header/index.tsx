import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { StoreCtx } from "../../store";

import s from "./Header.module.scss";

const Header: React.FC = observer(() => {
  const { totalItemsAmount, leftItemsAmount } = useContext(StoreCtx);

  return (
    <header className={s.header}>
      <h1 className={s.header__title}>ReactTS Todo</h1>
      <div className={s.header__info}>
        <div className={s.header__infoItem}>
          Total: <span className={s.header__value}>{totalItemsAmount}</span>
        </div>
        <div className={s.header__infoItem}>
          Left: <span className={s.header__value}>{leftItemsAmount}</span>
        </div>
      </div>
    </header>
  );
});

export default Header;
