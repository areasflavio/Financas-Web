import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Modal from 'react-modal';

import api from '../../services/api';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

Modal.setAppElement('#root');

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
	isOpen,
	onRequestClose,
}: NewTransactionModalProps) => {
	const [title, setTitle] = useState('');
	const [value, setValue] = useState(0);
	const [type, setType] = useState('income');
	const [category, setCategory] = useState('');

	const history = useHistory();
	const location = useLocation();

	async function handleCreateNewTransaction(event: React.FormEvent) {
		event.preventDefault();

		try {
			if (title === '' || category === '' || value === 0) {
				throw new Error('Something went wrong.');
			}

			await api.post('/transactions', {
				value,
				category,
				title,
				type,
			});

			setTitle('');
			setValue(0);
			setType('income');
			setCategory('');

			onRequestClose();

			if (location.pathname === '/') {
				window.location.reload();
			}

			history.push('/');
		} catch (err: any) {
			console.error(err.message);
		}
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
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

				<input
					type="text"
					placeholder="Categoria"
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
};

export default NewTransactionModal;
