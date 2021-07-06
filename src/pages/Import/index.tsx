import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import filesize from 'filesize';

import axios from 'axios';
import Header from '../../components/Header';
import Upload from '../../components/Upload';
import FileList from '../../components/FileList';

import api from '../../services/api';

import alertImg from '../../assets/alert.svg';

import { Container, Title, ImportFileContainer, Footer } from './styles';

interface FileProps {
	file: File;
	name: string;
	readableSize: string;
}

const Import: React.FC = () => {
	const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);
	const history = useHistory();

	async function handleUpload(): Promise<void> {
		const arrayData: FormData[] = [];

		uploadedFiles.forEach((uploadedFile) => {
			const data = new FormData();

			data.append('file', uploadedFile.file);

			arrayData.push(data);
		});

		try {
			const axiosData = arrayData.map((data) =>
				api.post('/transactions/import', data),
			);

			await axios.all(axiosData);

			history.push('/');
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error(err.response.error);
		}
	}

	function submitFile(files: File[]): void {
		const formattedFiles = files.map((file) => ({
			file,
			name: file.name,
			readableSize: filesize(file.size),
		}));

		setUploadedFiles(formattedFiles);
	}

	return (
		<>
			<Header />
			<Container>
				<Title>Importar uma transação</Title>
				<ImportFileContainer>
					<Upload onUpload={submitFile} />
					{!!uploadedFiles.length && <FileList files={uploadedFiles} />}

					<Footer>
						<p>
							<img src={alertImg} alt="Alert" />
							Permitido apenas arquivos CSV
						</p>
						<button onClick={handleUpload} type="button">
							Enviar
						</button>
					</Footer>
				</ImportFileContainer>
			</Container>
		</>
	);
};

export default Import;
