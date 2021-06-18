import React from 'react'
import PropTypes from 'prop-types'

import Menu from './Menu.component'
import Main from './Main.component'

const InsideLayout = (props) => {
	return(
		<div id="main">
			<Menu />
			<Main component={props.children} />
		</div>
	)
}

InsideLayout.propTypes = {
	children: PropTypes.object.isRequired
}

export default InsideLayout