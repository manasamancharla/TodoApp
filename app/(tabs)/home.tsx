import {
	Text,
	View,
	TouchableOpacity,
	FlatList,
	Modal,
	KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

import TodoList from "@/components/TodoList";
import { DATA } from "@/components/DATA";
import AddList from "@/components/AddList";

interface Todo {
	id: number;
	name: string;
	todos: string[];
}

const home = () => {
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
		<KeyboardAvoidingView className="bg-background dark:bg-dark-background w-full flex justify-center items-center h-full px-1">
			<Modal
				animationType="slide"
				visible={addTodoVisible}
				onRequestClose={handleTodo}
			>
				<AddList closeModal={handleTodo} addList={addList} />
			</Modal>

			{/* Task button */}
			{/* <View style={{ marginVertical: 24, alignItems: "center" }}>
				<TouchableOpacity style={styles.addList} onPress={handleTodo}>
					<AntDesign name="profile" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.add}>Add a task</Text>
			</View> */}

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
};

export default home;
