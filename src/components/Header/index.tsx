import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/financas_logo.svg';

import { Container } from './styles';

interface IHeaderProps {
	onOpenNewTransactionModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({
	onOpenNewTransactionModal,
}: IHeaderProps) => {
	return (
		<Container>
			<header>
				<div>
					<img src={logoImg} alt="fmoney" width="32" height="32" />

					<h1>Fmoney</h1>
				</div>

				<nav>
					<Link to="/">Dashboard</Link>
					<Link to="/importar">Importar</Link>
				</nav>

				<button type="button" onClick={onOpenNewTransactionModal}>
					Nova transação
				</button>
			</header>
		</Container>
	);
};

export default Header;
