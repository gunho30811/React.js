import { useState } from 'react';

function TodoList() {
	const [Todo, setTodo] = useState('');
	const [ToDos, setTodos] = useState([]);
	const onchange = e => {
		setTodo(e.target.value);
	};
	const onsubmit = e => {
		e.preventDefault();
		if (Todo === '') {
			return;
		}
		setTodo('');
		setTodos(currentArray => [Todo, ...currentArray]);
	};
	console.log(ToDos);
	return (
		<div>
			<h1>To do List({ToDos.length})</h1>
			<form onSubmit={onsubmit}>
				<input
					text='text'
					placeholder='Write your to do..'
					value={Todo}
					onChange={onchange}
				/>
				<button>Add To do </button>
			</form>
			<hr />
			{ToDos.map((item, index) => (
				<ul key={index}>{item}</ul>
			))}
		</div>
	);
}

export default TodoList;
