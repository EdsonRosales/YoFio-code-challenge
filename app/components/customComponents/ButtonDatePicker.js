import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import { AntDesign } from '@expo/vector-icons';

export default function ButtonDatePicker({ title, style, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={[styles.container, style]}>
				<Text style={styles.buttonTitle}>{title}</Text>
				<AntDesign
					style={styles.arrowStyle}
					name="down"
					size={15}
					color={colors.mediumGray}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 5,
		height: 40,
		backgroundColor: colors.white,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.85,
		elevation: 5,
		paddingHorizontal: 15,
		paddingVertical: 7,
		marginVertical: 10,
	},
	buttonTitle: {
		color: colors.mediumGray,
		fontSize: 15,
		justifyContent: 'space-around',
	},
	arrowStyle: {
		marginLeft: 10,
	},
});
