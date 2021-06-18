import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { protectedRoutes, login, notFound } from '../config/routes.config'
import ProtectedRoutes from './components/ProtectedRoutes.component'

const Routes = () => {

	console.log('[PRINT ROUTES - 1]')

	return(
		<BrowserRouter>
			<Switch>
				<Route path={login.path} component={login.component} />
				{protectedRoutes.map((r) => {
					return <ProtectedRoutes key={r.uuid} path={r.path} exact={r.exact} component={r.component} roles={r.roles} />
				})}
				<Route path={notFound.path} component={notFound.component} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes