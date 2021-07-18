import React from "react";

import { Header, Filter, AddTodo } from "./components";

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="todos">
        <Header />
        <Filter />
        <AddTodo />
      </div>
    </div>
  );
};

export default App;
