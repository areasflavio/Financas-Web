import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/financas_logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<header>
				<div>
					<img src={logoImg} alt="Finanças" />

					<h1>Finanças Web</h1>
				</div>

				<nav>
					<Link to="/">Dashboard</Link>
					<Link to="/importar">Importar</Link>
				</nav>
			</header>
		</Container>
	);
};

export default Header;
