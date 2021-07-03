import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact component={Dashboard} />
			<Route path="/importar" component={Import} />
		</Switch>
	);
};

export default Routes;
