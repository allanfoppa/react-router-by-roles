import React from 'react'

import { useHistory } from 'react-router-dom'

import { AppContext } from '../contexts/app.context'

const Login = () => {

	const history = useHistory()

	const { setAuth, setRole } = React.useContext(AppContext)

	const sendLogin = () => {

		let responseAuth = true
		let responseRole = 'peach'
		setAuth(responseAuth)
		setRole(responseRole)

		if(responseAuth === true) history.push('/')
	}

	return(
		<div className="login__container">
			<h2 className="font-family-super-mario">Tela de login</h2>
			<button
				className="button font-family-super-mario"
				onClick={() => sendLogin()}
			>
				Entrar
			</button>
		</div>
	)
}

export default Login