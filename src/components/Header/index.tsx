import React from "react";

import s from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <h1 className={s.header__title}>ReactTS Todo</h1>
      <div className={s.header__info}>
        <div className={s.header__infoItem}>
          Total: <span className={s.header__value}>0</span>
        </div>
        <div className={s.header__infoItem}>
          Left: <span className={s.header__value}>0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
