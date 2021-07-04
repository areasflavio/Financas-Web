import React from 'react';

import Header from '../../components/Header';
import Upload from '../../components/Upload';

import alertImg from '../../assets/alert.svg';

import { Container, Title, ImportFileContainer, Footer } from './styles';

const Import: React.FC = () => {
	function submitFile(files: File[]): void {
		// TODO
	}

	return (
		<>
			<Header />
			<Container>
				<Title>Importar uma transação</Title>
				<ImportFileContainer>
					<Upload onUpload={submitFile} />

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
