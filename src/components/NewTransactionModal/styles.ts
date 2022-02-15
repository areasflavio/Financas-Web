import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
	h2 {
		color: #1e90ff;
		font-size: 1.5rem;
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		height: 4rem;
		padding: 0 1.5rem;
		border-radius: 0.25rem;
		border: 1px solid #d7d7d7;

		background: #e7e9ee;
		color: #365b80;

		font-weight: 400;
		font-size: 1rem;

		&::placeholder {
			color: #365b80;
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

		background: #ffab1f;
		color: #ffffff;

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
	green: '#31bf0d',
};

export const RadioBox = styled.button.attrs({
	type: 'button',
})<RadioBoxProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 4rem;
	border: 1px solid #d7d7d7;
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
		color: #365b80;
	}
`;

export const InputSelect = styled(CreatableSelect)`
	& .Select__control {
		width: 100%;
		height: 4rem;

		padding: 0 0.5rem 0 1.5rem;
		border-radius: 0.25rem;
		border: 1px solid #d7d7d7;

		background: #e7e9ee;

		font-weight: 400;
		font-size: 1rem;

		& + input {
			margin-top: 1rem;
		}
	}

	.Select__value-container {
		padding: 0;

		.Select__single-value {
			color: #365b80;
		}

		.Select__placeholder {
			color: #365b80;
		}

		.Select__input-container {
			padding: 0;
			margin: 0;
			color: #365b80;
		}
	}

	.Select__menu {
		background: #f0f2f5;

		.Select__menu-list {
			color: #365b80;

			.Select__option--is-focused {
				background: #e7e9ee;
			}

			.Select__option--is-selected {
				background: #1e90ff;
			}
		}
	}
`;
