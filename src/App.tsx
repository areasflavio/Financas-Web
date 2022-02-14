import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import NewTransactionModal from './components/NewTransactionModal';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
		useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}

	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
				<NewTransactionModal
					isOpen={isNewTransactionModalOpen}
					onRequestClose={handleCloseNewTransactionModal}
				/>

				<Routes />
			</BrowserRouter>
		</>
	);
};

export default App;
