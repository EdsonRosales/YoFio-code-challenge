import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';

export default function Button({ title, style, txtStyle, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.container, style]}>
				<Text style={[styles.buttonTitle, txtStyle]}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 25,
		height: 40,
		backgroundColor: colors.mediumGray,
		paddingHorizontal: 20,
		paddingVertical: 7,
		marginVertical: 10,
	},
	buttonTitle: {
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 18,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
