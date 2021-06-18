import React from 'react'

import { AppContext } from '../contexts/app.context'

const WorldOne = () => {
	// console.log('[WorldOne PROPS]', props)
	const { auth, role } = React.useContext(AppContext)

	return(
		<div>
			<h2><b>TODOS</b> podem ver essa tela, o que foi passado foi &quot;{role}&quot; </h2>
			<h2>Apenas a <b>PEACH</b> pode ver as coins, o que foi passado foi &quot;{role}&quot; </h2>
			<p>CONTEXT auth = {auth.toString()}, role = {role}</p>
			<div>
				<ul className="list">
					<li>Mario: {role === 'peach' ? '$ 3' : ' $ --'}</li>
					<li>Luigi: {role === 'peach' ? '$ 9' : ' $ --'}</li>
					<li>Peach: {role === 'peach' ? '$ 6' : ' $ --'}</li>
					<li>Bowser: {role === 'peach' ? '$ 0' : ' $ --'}</li>
				</ul>
			</div>
		</div>
	)
}

export default WorldOne