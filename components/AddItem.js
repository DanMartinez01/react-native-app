import React from "react";
import { Pressable, TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddItem = ({ text, addItem, setText }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder="Enter a product"
				style={styles.input}
				value={text}
				onChangeText={(value) => setText(value)}
			/>
			<Pressable style={styles.button} onPress={() => addItem()}>
				<Ionicons name="add-circle-outline" size={40} color="white" />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
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
});

export default AddItem;
