import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const Button = ({
	title = null,
	handlePress,
	containerStyles = "",
	textStyles = "",
	isLoading = null,
	children,
}) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			className={`border-2 rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
				isLoading ? "opacity-50" : ""
			}`}
			// disabled={isLoading}
		>
			<Text className={`font-psemibold text-lg ${textStyles}`}>{title}</Text>
			{children}
		</TouchableOpacity>
	);
};

export default Button;
