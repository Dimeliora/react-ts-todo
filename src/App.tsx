import React from "react";

import { Header, Filter, AddTodo, TodosList } from "./components";

const App: React.FC = () => {
	return (
		<div className="container">
			<div className="todos">
				<Header />
				<main>
					<Filter />
					<AddTodo />
					<TodosList />
				</main>
			</div>
		</div>
	);
};

export default App;
