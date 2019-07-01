import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = (props) => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>{props.headerText}</Text>
		</View>
	)
}

export { Header }

const styles = StyleSheet.create({
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f8f8f8',
		height: 100,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.5
	},
	textStyle: {
		paddingTop: 20,
		marginTop: 20,
		fontSize: 20,
		color: '#333'
	}
})
