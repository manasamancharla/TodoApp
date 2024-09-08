// import { View, Text, Button } from "react-native";
// import React from "react";

// import { Link } from "expo-router";
// import { useCounterStore } from "../store";

// const index = () => {
// 	const count = useCounterStore((state) => state.count);
// 	const increment = useCounterStore((state) => state.increment);
// 	return (
// 		<View>
// 			<Text className="bg-teal-300 text-2xl text-red-400">index</Text>
// 			<Link href="/Home">Home Yo</Link>
// 			<Link href="/users/2">Users</Link>
// 			<Text>Count: {count}</Text>
// 			<Button title="+" onPress={increment} />
// 		</View>
// 	);
// };

// export default index;

import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Modal,
	KeyboardAvoidingView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

import colors from "./colors";
import TodoList from "../components/TodoList";
import { DATA } from "../components/DATA";
import AddList from "../components/AddList";

interface Todo {
	id: number;
	name: string;
	todos: string[];
}

export default function App() {
	const [addTodoVisible, setAddTodoVisible] = useState(false);

	const handleTodo = () => {
		setAddTodoVisible(!addTodoVisible);
	};

	const renderList = ({ item }: { item: Todo }) => {
		return <TodoList list={item} updateList={updateList} />;
	};

	const [list, setList] = useState<Todo[]>(DATA);

	const addList = (newList: Omit<Todo, "id" | "todos">) => {
		setList([...list, { ...newList, id: list.length + 1, todos: [] }]);
	};

	const updateList = (updatedList: Todo) => {
		setList((prevList) =>
			prevList.map((item) => (item.id === updatedList.id ? updatedList : item))
		);
	};

	return (
		<KeyboardAvoidingView style={styles.container}>
			{/* Modal for adding a new to-do */}
			<Modal
				animationType="slide"
				visible={addTodoVisible}
				onRequestClose={handleTodo}
			>
				<AddList closeModal={handleTodo} addList={addList} />
			</Modal>

			{/* Title section */}
			<View style={{ flexDirection: "row" }}>
				<View style={styles.divider}></View>
				<Text style={styles.title}>
					Todo
					<Text style={{ fontWeight: "300", color: colors.blue }}>List</Text>
				</Text>
				<View style={styles.divider}></View>
			</View>

			{/* Task button */}
			<View style={{ marginVertical: 24, alignItems: "center" }}>
				<TouchableOpacity style={styles.addList} onPress={handleTodo}>
					<AntDesign name="profile" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.add}>Add a task</Text>
			</View>

			{/* To-do list section */}
			<View style={{ height: 275, paddingLeft: 32 }}>
				<FlatList
					data={list}
					keyExtractor={(item) => item.name}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					renderItem={renderList}
					keyboardShouldPersistTaps="always"
				/>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	divider: {
		backgroundColor: colors.lightBlue,
		height: 1,
		flex: 1,
		alignSelf: "center",
	},

	title: {
		fontSize: 38,
		fontWeight: "800",
		color: colors.black,
		paddingHorizontal: 64,
	},

	addList: {
		borderWidth: 2,
		borderColor: colors.lightBlue,
		borderRadius: 4,
		padding: 16,
		alignItems: "center",
		justifyContent: "center",
	},

	add: {
		color: colors.blue,
		fontWeight: "600",
		fontSize: 14,
		marginTop: 8,
	},
});
