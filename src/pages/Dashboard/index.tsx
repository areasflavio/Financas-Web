import React from 'react';

import Header from '../../components/Header';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container, CardContainer, Card, TableContainer } from './styles';

const Dashboard: React.FC = () => {
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
						<h1>R$ 5.000,00</h1>
					</Card>
					<Card>
						<header>
							<p>Saídas</p>
							<img src={outcomeImg} alt="Outcome" />
						</header>
						<h1>R$ 1.000,00</h1>
					</Card>
					<Card total>
						<header>
							<p>Total</p>
							<img src={totalImg} alt="Total" />
						</header>
						<h1>R$ 4000,00</h1>
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
							<tr>
								<td className="title">Computer</td>
								<td className="income">R$ 5.000,00</td>
								<td>Sell</td>
								<td>20/04/2020</td>
							</tr>
							<tr>
								<td className="title">Website Hosting</td>
								<td className="outcome">R$ - 1.000,00</td>
								<td>Hosting</td>
								<td>19/04/2020</td>
							</tr>
						</tbody>
					</table>
				</TableContainer>
			</Container>
		</>
	);
};

export default Dashboard;
