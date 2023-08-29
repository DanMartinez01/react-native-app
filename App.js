import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	Pressable,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
	const initialState = [
		{ id: 1, text: "banana" },
		{ id: 2, text: "pear" },
		{ id: 3, text: "apple" },
	];

	const [text, setText] = useState("");
	const [list, setList] = useState(initialState);

	const addItem = () => {
		list.push({ id: Math.random, text: text });
		setList(list);
		setText("");
		console.log(list);
	};

	return (
		<View style={styles.container}>
			<View style={styles.banner}>
				<FontAwesome5 name="shopping-cart" size={40} color="white" />
				<Text style={styles.title}>My shopping list </Text>
			</View>
			<Text />
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Enter a product"
					style={styles.input}
					value={text}
					onChangeText={(value) => setText(value)}
				/>
				<Pressable style={styles.button} onPress={addItem}>
					<Ionicons name="add-circle-outline" size={40} color="white" />
				</Pressable>
			</View>
			<View style={styles.listContainer}>
				{list.map((elem) => (
					<Text key={elem.id} style={styles.itemText}>
						-{elem.text}
					</Text>
				))}
			</View>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		// justifyContent: 'center',
		height: "100%",
		borderRadius: 20,
		paddingBottom: 20,
	},
	banner: {
		alignItems: "center",
		width: "100%",
		backgroundColor: "#d00000",
		padding: 20,
	},
	title: {
		fontSize: 30,
		color: "white",
	},
	inputContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 20,
		backgroundColor: "#e85d04",
		justifyContent: "center",
	},
	input: {
		fontSize: 20,
		height: 40,
		width: 200,
		borderWidth: 1,
		backgroundColor: "white",
		borderRadius: 20,
		textAlign: "center",
	},
	button: {
		padding: 10,
		borderRadius: 100,
	},
	addButtonText: {
		fontSize: 20,
	},
	listContainer: {
		width: "90%",
		padding: 100,
		backgroundColor: "",
		borderRadius: 10,
		borderWidth: 1,
		alignContent: "flex-start",
	},
	itemText: {
		fontSize: 20,
		marginLeft: 0,
		padding: 0,
	},
});
