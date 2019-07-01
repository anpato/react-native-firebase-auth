import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = (props) => {
	return <View style={styles.containerStyle}>{props.children}</View>
}

export { Card }

const styles = StyleSheet.create({
	containerStyle: {
		borderWidth: 1,
		borderRadius: 6,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 6,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 5,
		marginBottom: 20
	}
})
