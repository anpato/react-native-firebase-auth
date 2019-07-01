import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

const Input = ({
	label,
	value,
	handleChange,
	placeholder,
	secureTextEntry,
	onFocus
}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				value={value}
				placeholder={placeholder}
				onChangeText={handleChange}
				style={styles.formInput}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	formInput: {
		color: '#333',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	label: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	}
})
export { Input }
