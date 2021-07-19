import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import cn from "classnames";

import TodoItemInput from "./TodoItemInput";
import { ReactComponent as TrashIcon } from "../../../assets/icons/trash.svg";
import { ReactComponent as CheckIcon } from "../../../assets/icons/checkbox.svg";
import { ReactComponent as PencilIcon } from "../../../assets/icons/pencil.svg";

import s from "./TodosListItem.module.scss";

import { Todo } from "../../../types/todos";

interface TodosListItemProps {
	item: Todo;
	isEditing: boolean;
	onCheck: (id: number) => void;
	onRemove: (id: number) => void;
	onUpdate: (id: number, title: string) => void;
	onEdit: (id?: number, ref?: HTMLElement | null) => void;
}

const TodosListItem: React.FC<TodosListItemProps> = observer((props) => {
	const { item, isEditing, onCheck, onRemove, onUpdate, onEdit } = props;

	const listItemRef = useRef<HTMLLIElement>(null);

	const checkClickHandler = (): void => {
		onCheck(item.id);
	};

	const removeClickHandler = (): void => {
		onRemove(item.id);
	};

	const toggleEditModeHandler = (): void => {
		onEdit(item.id, listItemRef.current);
	};

	const itemTitleChangeApplyHandler = (value: string): void => {
		onUpdate(item.id, value);
		onEdit();
	};

	const itemTitle = (
		<>
			<button
				className={s.todoItemEditBtn}
				type="button"
        aria-label="Edit todo"
				onClick={toggleEditModeHandler}
			>
				<PencilIcon className={s.todoItemEditBtnIcon} />
			</button>
			<div
				className={cn({
					[s.todoItemTitleCompleted]: item.completed,
				})}
			>
				{item.title}
			</div>
		</>
	);

	return (
		<li
			ref={listItemRef}
			className={cn(s.todoItem, {
				[s.todoItemDone]: item.completed,
				[s.todoItemEdit]: isEditing,
			})}
		>
			<div className={s.todoItemBody}>
				{!isEditing && itemTitle}
				{isEditing && (
					<TodoItemInput
						value={item.title}
						onApply={itemTitleChangeApplyHandler}
					/>
				)}
			</div>
			<div className={s.todoItemControls}>
				<button
					className={cn(s.todoItemBtn, s.todoItemBtnCheck)}
					type="button"
					aria-label="Check todo"
					onClick={checkClickHandler}
				>
					<CheckIcon className={s.todoItemBtnIcon} />
				</button>
				<button
					className={cn(s.todoItemBtn, s.todoItemBtnRemove)}
					type="button"
					aria-label="Remove todo"
					onClick={removeClickHandler}
				>
					<TrashIcon className={s.todoItemBtnIcon} />
				</button>
			</div>
		</li>
	);
});

export default TodosListItem;
