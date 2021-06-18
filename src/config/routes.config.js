
/**
 * Existem 4 papéis: mario | luigi | peach | bowser
*/

import { uniqueID } from '../third-party/uuid/handleGenerateUUID'

// IMPORT ROUTES
import Login from '../views/Login.view'
import NotFound from '../views/NotFound.view'

// IMPORT PROTECTED ROUTES
import WorldOne from '../views/WorldOne.view'
import WorldTwo from '../views/WorldTwo.view'
import WorldThree from '../views/WorldThree.view'

// ROUTES
export const login = {
	uuid: uniqueID(),
	path: '/login',
	component: Login,
}

export const notFound = {
	uuid: uniqueID(),
	path: '*',
	component: NotFound
}

// PROTECTED ROUTES
export const protectedRoutes = [
	{
		uuid: uniqueID(),
		path: '/',
		exact: true,
		component: WorldOne,
		menuName: 'World One',
		roles: ['mario', 'luigi', 'peach', 'bowser']
	},
	{
		uuid: uniqueID(),
		path: '/w2',
		component: WorldTwo,
		menuName: 'World Two',
		roles: ['mario', 'luigi']
	},
	{
		uuid: uniqueID(),
		path: '/w3',
		component: WorldThree,
		menuName: 'World Three',
		roles: ['bowser']
	}
]