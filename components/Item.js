import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Item = ({ text, onDelete, item }) => {
	return (
		<View style={styles.item}>
			<Text style={styles.itemText}>{text}</Text>
			<Pressable onPress={() => onDelete(item.id)} style={styles.delete}>
				<Feather name="trash" size={16} color="black" />
			</Pressable>
		</View>
	);
};

export default Item;

const styles = StyleSheet.create({
	item: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	itemText: {
		fontSize: 20,
		marginLeft: 0,
		padding: 0,
	},
});
