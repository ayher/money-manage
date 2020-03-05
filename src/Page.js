import React from 'react';
import App from './App.js'
import { HashRouter , Route  } from 'react-router-dom';

export default  () => {
	return(
			<HashRouter>
				<Route path="/home" component={App} />
			</HashRouter>
		)
}