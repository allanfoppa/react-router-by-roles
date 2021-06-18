import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { AppContext } from '../../contexts/app.context'

import InsideLayout from '../../components/Layout/Inside.component'

const ProtectedRoutes = (props) => {
	console.log(typeof props.component)
	const Component = props.component

	const { auth, role } = React.useContext(AppContext)

	console.log('[==================================================================]')
	console.log('[(PROTECTED ROUTES COMPONENT) PRINT PROTECTED ROUTES - 2]')
	console.log('[(PROTECTED ROUTES COMPONENT) ROLES QUE PODEM ACESSAR A ROTA PROTEGIDA ESCOLHIDA]', props.roles)
	console.log('[(PROTECTED ROUTES COMPONENT) AUTH AND ROLE CONTEXT]', auth, role)

	if (auth !== true || props.roles.indexOf(role) === -1) return <Redirect to={{ pathname: '/login' }} />

	return(
		<InsideLayout>
			<Component param={props.location} role={role} />
		</InsideLayout>
	)

}

ProtectedRoutes.propTypes = {
	roles: PropTypes.array.isRequired,
	component: PropTypes.func.isRequired,
	location: PropTypes.object
}

export default ProtectedRoutes