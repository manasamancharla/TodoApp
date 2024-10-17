interface Todo {
	id: number;
	task: string;
	completed: boolean;
	title: string;
}

interface TodoList {
	id: number;
	name: string;
	color: string;
	todos: Todo[];
}

export const DATA: TodoList[] = [
	{
		id: 1,
		name: "Plan a trip",
		color: "#5CD859",
		todos: [
			{
				id: 1, // Add a unique id for each todo
				title: "Book Flight",
				task: "Book Flight", // Assuming `task` is the same as `title`
				completed: false,
			},
			{
				id: 2,
				title: "Book Bus",
				task: "Book Bus",
				completed: false,
			},
		],
	},
	{
		id: 2,
		name: "Plan a Vacation",
		color: "#24A6D9",
		todos: [
			{
				id: 1,
				title: "Book Flight",
				task: "Book Flight",
				completed: true,
			},
			{
				id: 2,
				title: "Book Bus",
				task: "Book Bus",
				completed: false,
			},
		],
	},
	{
		id: 3,
		name: "Plan a Murder",
		color: "#595809",
		todos: [
			{
				id: 1,
				title: "Book Flight",
				task: "Book Flight",
				completed: true,
			},
			{
				id: 2,
				title: "Book Bus",
				task: "Book Bus",
				completed: true,
			},
		],
	},
];
