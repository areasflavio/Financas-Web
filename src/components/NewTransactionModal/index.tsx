import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Modal from 'react-modal';

import api from '../../services/api';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import {
	Container,
	RadioBox,
	TransactionTypeContainer,
	InputSelect,
} from './styles';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

Modal.setAppElement('#root');

type Category = {
	label: string;
	value: string;
};

type APICategory = {
	title: string;
};

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) => {
	const [title, setTitle] = useState('');
	const [value, setValue] = useState(0);
	const [type, setType] = useState('income');
	const [category, setCategory] = useState<Category | undefined>(undefined);
	const [categoriesOptions, setCategoriesOptions] = useState<Category[]>([]);

	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		async function getCategories() {
			const response = await api.get<APICategory[]>('/categories');

			const categoriesFormatted = response.data.map((c) => ({
				label: c.title,
				value: c.title.toLowerCase(),
			}));

			setCategoriesOptions(categoriesFormatted);
		}

		getCategories();
	}, []);

	async function handleCreateNewTransaction(event: React.FormEvent) {
		event.preventDefault();

		try {
			if (title === '' || category?.value === '' || value === 0) {
				throw new Error('Something went wrong.');
			}

			await api.post('/transactions', {
				value,
				category: category?.label,
				title,
				type,
			});

			setTitle('');
			setValue(0);
			setType('income');
			setCategory(undefined);

			onRequestClose();

			if (location.pathname === '/') {
				window.location.reload();
			}

			history.push('/');
		} catch (err: any) {
			console.error(err.message);
		}
	}

	function handleRequestClose() {
		setTitle('');
		setValue(0);
		setType('income');
		setCategory(undefined);

		onRequestClose();
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={handleRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<Container onSubmit={handleCreateNewTransaction}>
				<h2>Cadastrar transação</h2>

				<input
					type="text"
					placeholder="Título"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>

				<input
					type="number"
					placeholder="Valor"
					value={value}
					onChange={(event) => setValue(Number(event.target.value))}
				/>

				<TransactionTypeContainer>
					<RadioBox
						onClick={() => setType('income')}
						isActive={type === 'income'}
						activeColor="green"
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>
					<RadioBox
						onClick={() => setType('outcome')}
						isActive={type === 'outcome'}
						activeColor="red"
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</TransactionTypeContainer>

				<InputSelect
					classNamePrefix="Select"
					isClearable
					onCreateOption={(inputValue) => {
						setCategoriesOptions((prevOptions) => [
							...prevOptions,
							{
								label: inputValue,
								value: inputValue.toLowerCase(),
							},
						]);
						setCategory({ label: inputValue, value: inputValue.toLowerCase() });
					}}
					placeholder="Seleciona a categoria"
					value={category}
					onChange={(newValue) => setCategory(newValue as Category)}
					createOptionPosition="first"
					formatCreateLabel={(inputValue) => (
						<p>Criar categoria &quot;{inputValue}&quot;</p>
					)}
					options={categoriesOptions}
				/>

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
};

export default NewTransactionModal;
