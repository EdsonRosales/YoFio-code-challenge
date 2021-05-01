import RNDateTimePicker from '@react-native-community/datetimepicker';
import React, { useEffect, useRef } from 'react';
import { Platform, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../config/colors';

export default function CustomDatePicker({ visible, onClose, ...otherProps }) {
	const refRBSheet = useRef();
	useEffect(() => {
		visible && Platform.OS === 'ios' && refRBSheet.current.open();
	}, [visible]);
	return Platform.OS === 'ios' ? (
		<RBSheet ref={refRBSheet} onClose={onClose}>
			<View
				style={{
					height: 40,
					borderBottomColor: colors.lightGray,
					borderBottomWidth: 1,
					justifyContent: 'center',
					alignItems: 'flex-end',
				}}
			>
				<TouchableWithoutFeedback
					style={{ padding: 10, marginRight: 20 }}
					onPress={() => refRBSheet.current.close()}
				>
					<Text style={{ fontSize: 15 }}>Listo</Text>
				</TouchableWithoutFeedback>
			</View>
			<RNDateTimePicker {...otherProps} />
		</RBSheet>
	) : (
		visible && <RNDateTimePicker {...otherProps} />
	);
}
