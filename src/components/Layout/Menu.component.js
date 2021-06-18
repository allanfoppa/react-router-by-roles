import React from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from '../../contexts/app.context'

import { uniqueID } from '../../third-party/uuid/handleGenerateUUID'

import { protectedRoutes } from '../../config/routes.config'

const Menu = () => {
	const { role } = React.useContext(AppContext)
	console.log('[MENU ROLE]', role)

	return(
		<ul className="list">
			{protectedRoutes.map((r) => {
				return r.roles.indexOf(role) !== -1 && <li className="list__itens" key={uniqueID()}><Link to={r.path}>{r.menuName}</Link></li>
			})}
		</ul>
	)
}

export default Menu