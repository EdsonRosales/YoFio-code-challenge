import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	KeyboardAvoidingView,
} from 'react-native';
import colors from '../../config/colors';

export default function AppRoundedScreen({
	children,
	style,
	hideScrollView = false,
	...otherProps
}) {
	return (
		<View style={styles.background}>
			{hideScrollView ? (
				<View style={[styles.container, style]}>{children}</View>
			) : (
				<ScrollView
					style={[styles.container, style]}
					{...otherProps}
					nestedScrollEnabled={true}
				>
					{children}
				</ScrollView>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: "red",
		flex: 1,
	},
	container: {
		backgroundColor: colors.white,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		flex: 1,
	},
});
