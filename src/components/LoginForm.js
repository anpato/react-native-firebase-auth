import React, { Component } from 'react'
import { Card, CardSection, Button, Input, Spinner } from './common'
import { Text, StyleSheet } from 'react-native'
import * as Firebase from 'firebase'

export default class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			errorMsg: '',
			isLoading: false,
			token: null,
			isAuthenticated: false
		}
	}

	clearError = () => {
		this.setState({ error: '' })
	}

	renderButton = () => {
		const { isLoading } = this.state
		if (isLoading) {
			return <Spinner />
		} else {
			return <Button onPress={this.handleLogin}>Log In</Button>
		}
	}

	handleLogin = async () => {
		const { email, password } = this.state
		this.setState({ isLoading: true, error: '' })
		await Firebase.auth()
			.signInWithEmailAndPassword(email, password)
			.then((resp) => this.loginSuccess(resp.user.uid))
			.catch(async () => {
				await Firebase.auth()
					.createUserWithEmailAndPassword(email, password)
					.then((resp) => console.log('ok'))
					.catch((error) => this.loginFail(error.toString()))
			})
	}

	loginFail = (error) => {
		this.setState({ error: error, isLoading: false })
	}

	loginSuccess = async (uid) => {
		this.setState({
			error: '',
			isLoading: false,
			email: '',
			password: '',
			token: uid
		})
		const verify = await Firebase.auth().currentUser
	}

	render() {
		const { email, password, error } = this.state
		return (
			<Card>
				<CardSection>
					<Input
						secureTextEntry={false}
						label="Email"
						handleChange={(email) => this.setState({ email })}
						placeholder="susan@mail.com"
						value={email}
					/>
				</CardSection>
				<CardSection>
					<Input
						label="Password"
						secureTextEntry={true}
						placeholder="password"
						value={password}
						type="password"
						handleChange={(password) => this.setState({ password })}
					/>
				</CardSection>
				<CardSection>{this.renderButton()}</CardSection>
				<CardSection>
					<Text style={styles.errorText}>{error}</Text>
				</CardSection>
			</Card>
		)
	}
}

const styles = StyleSheet.create({
	errorText: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red',
		margin: 'auto'
	}
})
