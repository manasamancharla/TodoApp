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

import { ScrollView, View, Text, Image } from "react-native";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { Redirect, router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

import Button from "@/components/Button";

export default function App() {
	const { colorScheme, toggleColorScheme } = useColorScheme();

	return (
		<ScrollView
			contentContainerStyle={{
				height: "100%",
			}}
			style={{
				backgroundColor: colorScheme === "dark" ? "#161622" : "#ffffff",
			}}
		>
			{/* <StatusBar style={colorScheme} /> */}

			<View className="w-full flex justify-center items-center h-full px-4">
				<View className="flex-row">
					<View className="bg-text dark:bg-dark-text h-[1px] flex-1 self-center"></View>
					<Text className="text-[38px] font-pextrabold text-text dark:text-dark-text px-16">
						TodoList
					</Text>
					<View className="bg-text dark:bg-dark-text h-[1px] flex-1 self-center"></View>
				</View>

				<Button
					containerStyles={"p-2 mt-2 border-text dark:border-dark-text"}
					// title={{}}
					handlePress={() => router.push("/home")}
					textStyles={"text-text"}
				>
					<Text className="text-text dark:text-dark-text font-psemibold text-lg mr-1">
						Continue with
					</Text>
					<AntDesign name="google" size={20} color="#2f3645" />
				</Button>
			</View>
		</ScrollView>
	);
}
