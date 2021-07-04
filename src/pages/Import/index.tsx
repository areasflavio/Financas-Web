import React from 'react';

import Header from '../../components/Header';

import alertImg from '../../assets/alert.svg';

import { Container, Title, ImportFileContainer, Footer } from './styles';

const Import: React.FC = () => {
	return (
		<>
			<Header />
			<Container>
				<Title>Importar uma transação</Title>
				<ImportFileContainer>
					<h1>Upload</h1>

					<Footer>
						<p>
							<img src={alertImg} alt="Alert" />
							Permitido apenas arquivos CSV
						</p>
						<button type="button">Enviar</button>
					</Footer>
				</ImportFileContainer>
			</Container>
		</>
	);
};

export default Import;
