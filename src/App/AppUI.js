import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoError } from "../TodoError";
import { TodoLoading } from "../TodoLoading";
import { EmptyTodo} from "../EmptyTodo";




function AppUI() {
	const { error, 
		loading, 
		searchedTodos, 
		completeTodo, 
		deleteTodo, 
		openModal, 
		setOpenModal, 
	} =
		React.useContext(TodoContext);
        
	return (
		<React.Fragment>
			<TodoCounter />
			<TodoSearch />

			<TodoList>
				{error && <TodoError error={error} />}
				{loading && <TodoLoading />}
				{(!loading && !searchedTodos.length) && <EmptyTodo />}

				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			{!!openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
			<CreateTodoButton setOpenModal={setOpenModal} />
		</React.Fragment>
	);
}
export { AppUI };