import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import AddItem from "./components/AddItem";
import Item from "./components/Item";
import CustomModal from "./components/CustomModal";

const initialState = [
	{ id: 1, text: "banana" },
	{ id: 2, text: "pear" },
	{ id: 3, text: "apple" },
];
export default function App() {
	const [itemSelected, setItemSelected] = useState({});
	const [modalVisible, setModalVisible] = useState(false);
	const [text, setText] = useState("");
	const [list, setList] = useState(initialState);

	const handleDelete = (itemId) => {
		const newList = list.filter((item) => item.id !== itemId);
		setList(newList);
		setModalVisible(false);
	};
	const addItem = () => {
		list.push({ id: Math.random, text: text });
		setList(list);
		setText("");
		console.log(list);
	};
	const clearList = () => {
		setList([]);
		setModalVisible(false);
	};
	return (
		<View style={styles.container}>
			<CustomModal
				visible={modalVisible}
				onDelete={handleDelete.bind(this, itemSelected.id)}
				item={itemSelected}
				setModalVisible={setModalVisible}
				clearList={clearList}
			/>
			<View style={styles.banner}>
				<FontAwesome5 name="clipboard-list" size={24} color="white" />
				<Text style={styles.title}>Shopping list</Text>
			</View>
			<AddItem text={text} addItem={addItem} setText={setText} />
			{list.length > 0 ? (
				<View style={styles.listContainer}>
					<View>
						<FlatList
							data={list}
							renderItem={({ item }) => (
								<Item
									text={item.text}
									item={item}
									onDelete={handleDelete}
									setModalVisible={setModalVisible}
								/>
							)}
							keyExtractor={(item) => item.id}
						></FlatList>
					</View>
					<Pressable
						onPress={() => setModalVisible(true)}
						style={styles.delete}
					>
						<Text style={styles.deleteText}>Delete all items</Text>
					</Pressable>
				</View>
			) : (
				<p>No elements added</p>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
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
	itemsContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	itemText: {
		fontSize: 20,
		marginLeft: 0,
		padding: 0,
	},
	delete: {
		alignItems: "center",
		marginTop: 40,
		backgroundColor: "#d00000",
		borderRadius: 10,
		padding: 4,
	},
	deleteText: {
		color: "#ffff",
		margin: "auto",
	},
});
