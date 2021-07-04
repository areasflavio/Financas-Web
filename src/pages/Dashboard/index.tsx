/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import api from '../../services/api';
import formatValue from '../../utils/formatValues';

import { Container, CardContainer, Card, TableContainer } from './styles';

interface Transaction {
	id: string;
	title: string;
	value: number;
	formattedValue: string;
	formattedDate: string;
	type: 'income' | 'outcome';
	category: { title: string };
	created_at: Date;
}

interface Balance {
	income: string;
	outcome: string;
	total: string;
}

const Dashboard: React.FC = () => {
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [balance, setBalance] = useState<Balance>({} as Balance);

	useEffect(() => {
		async function loadTransactions(): Promise<void> {
			const response = await api.get('/transactions');

			const formattedTransactions = response.data.transactions.map(
				(transaction: Transaction) => ({
					...transaction,
					formattedValue: formatValue(Number(transaction.value)),
					formattedDate: new Date(transaction.created_at).toLocaleDateString(
						'pt-br',
					),
				}),
			);

			const apiBalance = response.data.balance;

			const formattedBalance: Balance = {
				income: formatValue(Number(apiBalance.income)),
				outcome: formatValue(Number(apiBalance.outcome)),
				total: formatValue(Number(apiBalance.total)),
			};

			setTransactions(formattedTransactions);
			setBalance(formattedBalance);
		}

		loadTransactions();
	}, []);

	return (
		<>
			<Header />

			<Container>
				<CardContainer>
					<Card>
						<header>
							<p>Entradas</p>
							<img src={incomeImg} alt="Income" />
						</header>
						<h1>{balance.income}</h1>
					</Card>
					<Card>
						<header>
							<p>Saídas</p>
							<img src={outcomeImg} alt="Outcome" />
						</header>
						<h1>{balance.outcome}</h1>
					</Card>
					<Card total>
						<header>
							<p>Total</p>
							<img src={totalImg} alt="Total" />
						</header>
						<h1>{balance.total}</h1>
					</Card>
				</CardContainer>

				<TableContainer>
					<table>
						<thead>
							<tr>
								<th>Título</th>
								<th>Preço</th>
								<th>Categoria</th>
								<th>Data</th>
							</tr>
						</thead>

						<tbody>
							{transactions.map((transaction) => (
								<tr key={transaction.id}>
									<td className="title">{transaction.title}</td>
									<td className={transaction.type}>
										{transaction.formattedValue}
									</td>
									<td>{transaction.category.title}</td>
									<td>{transaction.formattedDate}</td>
								</tr>
							))}
						</tbody>
					</table>
				</TableContainer>
			</Container>
		</>
	);
};

export default Dashboard;
