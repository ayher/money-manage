import React from 'react';
import App from './App.js'
import { HashRouter, Route, Redirect  } from 'react-router-dom';

export default  () => {
	return(
			<HashRouter>
			<Route exact path="/" render={() => <Redirect to="/home" push />} />
				<Route  path="/home" component={App} />
			</HashRouter>
		)
}