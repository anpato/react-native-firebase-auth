import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import Firebase from 'firebase'
import {
	Header,
	Button,
	CardSection,
	Spinner
} from './src/components/common/index'
import LoginForm from './src/components/LoginForm'
import { config } from './config/firebase'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			isAuthenticated: null
		}
	}
	componentDidMount() {
		Firebase.initializeApp(config)
		Firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ isAuthenticated: true })
			} else {
				this.setState({ isAuthenticated: false })
			}
		})
	}

	handleLogOut = async () => {
		Firebase.auth().signOut()
	}

	renderContent = () => {
		const { isAuthenticated } = this.state
		switch (isAuthenticated) {
			case true:
				return (
					<CardSection>
						<Button onPress={this.handleLogOut}>Log Out</Button>
					</CardSection>
				)
			case false:
				return <LoginForm />
			default:
				return <Spinner size="large" />
		}
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
})
