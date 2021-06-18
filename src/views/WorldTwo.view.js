import React from 'react'
import PropTypes from 'prop-types'

import { AppContext } from '../contexts/app.context'

const WorldTwo = (props) => {

	const { role } = React.useContext(AppContext)

	return(
		<div>
			<h2>Apenas <b>Mario e Luigi</b> podem ver essa tela, o que foi passado foi &quot;{props.role}&quot; </h2>
			{role === 'mario' &&
				<p>It&apos;s me, Mario</p>
			}
		</div>
	)
}

WorldTwo.propTypes = {
	role: PropTypes.string.isRequired,
}


export default WorldTwo