import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
	h2 {
		color: var(--color-blue);
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		height: 4rem;
		padding: 0 1.5rem;
		border-radius: 0.25rem;
		border: 1px solid var(--color-gray-100);

		background: var(--color-gray);
		color: var(--color-blue-dark);

		font-weight: 400;
		font-size: 1rem;

		&::placeholder {
			color: var(--color-blue-dark);
		}

		& + input {
			margin-top: 1rem;
		}
	}

	button[type='submit'] {
		width: 100%;
		height: 4rem;

		margin-top: 1.5rem;
		padding: 0 1.5rem;
		border-radius: 0.25rem;
		border: 0;

		background: var(--color-yellow);
		color: var(--color-white);

		font-size: 1rem;
		font-weight: 600;

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;

export const TransactionTypeContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;

	margin: 1rem 0;
`;

interface RadioBoxProps {
	isActive: boolean;
	activeColor: 'green' | 'red';
}

const colors = {
	red: '#FF4538',
	green: '#31BF0D',
};

export const RadioBox = styled.button.attrs({
	type: 'button',
})<RadioBoxProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 4rem;
	border: 1px solid var(--color-gray-100);
	border-radius: 0.25rem;

	background: ${(props) =>
		props.isActive
			? transparentize(0.9, colors[props.activeColor])
			: 'transparent'};

	transition: border-color 0.2s;

	&:hover {
		border-color: ${darken(0.1, '#d7d7d7')};
	}

	img {
		height: 20px;
		width: 20px;
	}

	span {
		display: inline-block;

		margin-left: 1rem;

		font-size: 1rem;
		color: var(--color-blue-dark);
	}
`;

export const InputSelect = styled(CreatableSelect)`
	& .Select__control {
		width: 100%;
		height: 4rem;

		padding: 0 0.5rem 0 1.5rem;
		border-radius: 0.25rem;
		border: 1px solid var(--color-gray-100);

		background: var(--color-gray);

		font-weight: 400;
		font-size: 1rem;

		& + input {
			margin-top: 1rem;
		}
	}

	.Select__value-container {
		padding: 0;

		.Select__single-value {
			color: var(--color-blue-dark);
		}

		.Select__placeholder {
			color: var(--color-blue-dark);
		}

		.Select__input-container {
			padding: 0;
			margin: 0;
			color: var(--color-blue-dark);
		}
	}

	.Select__menu {
		background: #f0f2f5;

		.Select__menu-list {
			color: var(--color-blue-dark);

			.Select__option--is-focused {
				background: var(--color-gray);
			}

			.Select__option--is-selected {
				background: var(--color-blue);
			}
		}
	}
`;
