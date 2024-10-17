import { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";

import TodoModal from "./TodoModal";
import colors from "../src/app/colors";

// import { client, databases, ID } from "../../appwrite";

// Define the type for the Todo item
interface Todo {
	id: number;
	task: string;
	completed: boolean;
	title: string;
}

// Define the type for the list prop
interface TodoListProps {
	list: {
		id: number;
		name: string;
		color: string;
		todos: Todo[];
	};
	updateList: (list: any) => void;
}

const TodoList: React.FC<TodoListProps> = ({ list, updateList }) => {
	const completedCount = list.todos.filter((todo) => todo.completed).length;
	const remainingCount = list.todos.length - completedCount;

	const todoList = list;

	const [showList, setShowList] = useState(false);

	const handleShowList = () => {
		setShowList(!showList);
	};

	// TEST

	const [createdDocument, setCreatedDocument] = useState(null);
	const [createdDocument2, setCreatedDocument2] = useState(null);

	// useEffect(() => {
	//   // Create a new document when the component mounts
	//   const promise = databases.createDocument(
	//     "65114e54ab8c9faa23c8",
	//     "651d426ba8b41093a806",
	//     ID.unique(),
	//     { name: "Hamlet", color: "red" }
	//   );

	//   promise.then(
	//     function (response) {
	//       setCreatedDocument(response); // Store the response in state
	//       console.log(response);
	//     },
	//     function (error) {
	//       console.log(error);
	//     }
	//   );

	//   const promise2 = databases.createDocument(
	//     "65114e54ab8c9faa23c8",
	//     "651d431c0b5759f21c66",
	//     ID.unique(),
	//     { completed: false, task: "sing", list: "Mowa" }
	//   );

	//   promise2.then(
	//     function (response) {
	//       setCreatedDocument2(response);
	//       console.log(response);
	//     },
	//     function (error) {
	//       console.log(error);
	//     }
	//   );
	// }, []);

	return (
		<View>
			{/* Modal for showing a todo */}
			<Modal
				animationType="slide"
				visible={showList}
				onRequestClose={handleShowList}
			>
				<TodoModal
					list={todoList}
					closeModal={handleShowList}
					updateList={updateList}
				/>
			</Modal>

			<TouchableOpacity
				style={[styles.listContainer, { backgroundColor: list.color }]}
				onPress={handleShowList}
			>
				{/* Display the list name */}
				<Text style={styles.listTitle} numberOfLines={1}>
					{list.name}
				</Text>

				<View>
					{/* Display the remaining todos count */}
					<View style={{ alignItems: "center" }}>
						<Text style={styles.count}>{remainingCount}</Text>
						<Text style={styles.subtitle}>Remaining</Text>
					</View>

					{/* Display the completed todos count */}
					<View style={{ alignItems: "center" }}>
						<Text style={styles.count}>{completedCount}</Text>
						<Text style={styles.subtitle}>Completed</Text>
					</View>

					{/* {createdDocument &&
            createdDocument.name &&
            createdDocument2 &&
            createdDocument2.task && (
              <>
                <Text style={styles.subtitle}>{createdDocument.name}</Text>
                <Text style={styles.subtitle}>{createdDocument2.list.$id}</Text>
              </>
            )} */}
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default TodoList;

const styles = StyleSheet.create({
	listContainer: {
		paddingVertical: 32,
		paddingHorizontal: 16,
		borderRadius: 6,
		marginHorizontal: 12,
		alignItems: "center",
		width: 200,
	},
	listTitle: {
		fontSize: 24,
		fontWeight: "700",
		color: "blue",
		marginBottom: 18,
	},

	count: {
		fontSize: 48,
		fontWeight: "200",
		color: "white",
	},

	subtitle: {
		fontSize: 12,
		fontWeight: "700",
		color: "white",
	},
});
