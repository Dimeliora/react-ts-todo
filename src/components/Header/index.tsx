import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import { StoreCtx } from "../../store";

import s from "./Header.module.scss";

const Header: React.FC = observer(() => {
  const { totalItemsAmount, leftItemsAmount } = useContext(StoreCtx);

  return (
    <header className={s.header}>
      <h1 className={s.headerTitle}>ReactTS Todo</h1>
      <div className={s.headerInfo}>
        <div className={s.headerInfoItem}>
          Total: <span className={s.headerValue}>{totalItemsAmount}</span>
        </div>
        <div className={s.headerInfoItem}>
          Left: <span className={s.headerValue}>{leftItemsAmount}</span>
        </div>
      </div>
    </header>
  );
});

export default Header;
