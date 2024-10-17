import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
	TouchableOpacity,
	TextInput,
} from "react-native";
import {
	AntDesign,
	Entypo,
	FontAwesome5,
	MaterialIcons,
} from "@expo/vector-icons";
import colors from "@/app/colors";

interface IconData {
	color: string;
	icon: React.ReactNode;
}

interface AddListProps {
	closeModal: () => void;
	addList: (list: { name: string; color: string }) => void;
}

const AddList: React.FC<AddListProps> = ({ closeModal, addList }) => {
	// Array of icons with colors for list selection
	const iconData: IconData[] = [
		{
			color: "#5CD859",
			icon: <Entypo name="graduation-cap" size={24} color="#5CD859" />,
		},
		{
			color: "#24A6D9",
			icon: <FontAwesome5 name="shuttle-van" size={24} color="#24A6D9" />,
		},
		{
			color: "#D85963",
			icon: <MaterialIcons name="business-center" size={24} color="#D85963" />,
		},
		{
			color: "#D88559",
			icon: <FontAwesome5 name="shopping-cart" size={24} color="#D88559" />,
		},
	];

	// State variables for name and selected color
	const [name, setName] = useState<string>("");
	const [color, setColor] = useState<string>(iconData[0].color);

	// Function to create a new to-do list
	const createTodo = () => {
		const list = { name, color };

		addList(list);

		setName("");
		closeModal();
	};

	return (
		<KeyboardAvoidingView style={[styles.container]} behavior="padding">
			<TouchableOpacity
				style={{ position: "absolute", top: 64, right: 32 }}
				onPress={closeModal}
			>
				<AntDesign name="close" size={24} color={colors.black} />
			</TouchableOpacity>

			{/* Text Input */}
			<View style={{ alignSelf: "stretch", marginHorizontal: 32 }}>
				<Text style={styles.title}>Create Todo List</Text>
				<TextInput
					style={styles.input}
					placeholder="List Name"
					onChangeText={(text) => setName(text)}
				/>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 12,
					}}
				>
					{/* Render color selection icons */}
					{iconData.map((icon, index) => (
						<TouchableOpacity
							key={index}
							style={[styles.colorSelect, { borderColor: icon.color }]}
							onPress={() => setColor(icon.color)}
						>
							{icon.icon}
						</TouchableOpacity>
					))}
				</View>

				{/* Create Todo button */}
				<TouchableOpacity
					style={[styles.create, { backgroundColor: color }]}
					onPress={createTodo}
				>
					<Text style={{ color: colors.white, fontWeight: "600" }}>
						Create!
					</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	title: {
		fontSize: 28,
		fontWeight: "800",
		color: colors.black,
		alignSelf: "center",
		marginBottom: 16,
	},

	input: {
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: colors.blue,
		borderRadius: 6,
		height: 50,
		marginTop: 8,
		paddingHorizontal: 16,
		fontSize: 18,
	},

	create: {
		marginTop: 24,
		height: 50,
		borderRadius: 6,
		alignItems: "center",
		justifyContent: "center",
	},

	colorSelect: {
		width: 60,
		height: 60,
		borderRadius: 50,
		borderWidth: StyleSheet.hairlineWidth,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default AddList;
