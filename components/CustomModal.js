import { View, Text, Pressable, Modal, StyleSheet } from "react-native";
import React from "react";

const CustomModal = ({
	visible,
	closeModal,
	onDelete,
	setModalVisible,
	item,
	clearList,
}) => {
	return (
		<Modal onRequestClose={closeModal} visible={visible}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text>ARE YOU SURE?</Text>
					<Pressable onPress={() => clearList()}>
						<Text style={styles.modalText}>YES</Text>
					</Pressable>

					<Pressable
						style={[styles.button, styles.buttonClose]}
						onPress={() => setModalVisible(false)}
					>
						<Text style={styles.textStyle}>NO</Text>
					</Pressable>
				</View>
			</View>
		</Modal>
	);
};

export default CustomModal;

const styles = StyleSheet.create({
	modalContainer: {
		padding: 30,
		backgroundColor: "blue",
	},
	textStyle: {
		size: 10,
		margin: 10,
	},
	modalText: {
		size: 10,
		margin: 10,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#d00000",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});
