import React from 'react'

import { AppContext } from '../../contexts/app.context'

import Routes from '../../routes/router'

const App = () => {

	const [ auth, setAuth ] = React.useState(false)
	const [ role, setRole ] = React.useState('')

	return(
		<AppContext.Provider
			value={{
				auth,
				setAuth,
				role,
				setRole
			}}
		>
			<Routes />
		</AppContext.Provider>
	)
}

export default App