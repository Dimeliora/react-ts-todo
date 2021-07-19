import React, { useState, useEffect, useContext, useCallback } from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";

import { StoreCtx } from "../../store";

import TodosListItem from "./TodosListItem";

import s from "./TodosList.module.scss";

const TodosList: React.FC = observer(() => {
	const { filteredItems, checkItem, removeItem, updateItem } =
		useContext(StoreCtx);

	const [editItemId, setEditItemId] = useState<number | null>(null);
	const [editItemRef, setEditItemRef] = useState<HTMLElement | null>(null);

	const editItemChangeHandler = useCallback(
		(id: number | null = null, ref: HTMLElement | null = null): void => {
			setEditItemId(id);
			setEditItemRef(ref);
		},
		[]
	);

	useEffect(() => {
		const documentClickHandler = (e: MouseEvent): void => {
			const path = e.composedPath();
			if (editItemRef && !path.includes(editItemRef)) {
				setEditItemId(null);
				setEditItemRef(null);
			}
		};

		document.addEventListener("click", documentClickHandler);

		return () => {
			document.removeEventListener("click", documentClickHandler);
		};
	}, [editItemRef]);

	const todosListPlaceholder = (
		<h2 className={s.todosListPlaceholder}>No todos</h2>
	);

	const todosList = (
		<ul
			className={cn(s.todosListElement, {
				[s.todosListElementNoPointers]: editItemId !== null,
			})}
		>
			{filteredItems.map((item) => (
				<TodosListItem
					key={item.id}
					item={item}
					isEditing={item.id === editItemId}
					onCheck={checkItem}
					onRemove={removeItem}
					onUpdate={updateItem}
					onEdit={editItemChangeHandler}
				/>
			))}
		</ul>
	);

	const hasItems = filteredItems.length > 0;

	return (
		<section className={s.todosList}>
			{!hasItems && todosListPlaceholder}
			{hasItems && todosList}
		</section>
	);
});

export default TodosList;
