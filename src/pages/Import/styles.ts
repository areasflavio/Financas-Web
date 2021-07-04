import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
	width: 100%;
	max-width: 46rem;
	margin: 0 auto;
	padding: 2.25rem 1.25rem;

	margin-top: -7rem;
	background: #fff;
	border-radius: 0.25rem;
`;

export const Title = styled.h1`
	font-weight: 500;
	font-size: 2.25rem;
	line-height: 3.375rem;
	color: #365b80;
	text-align: center;
`;

export const ImportFileContainer = styled.section`
	padding: 2rem 4rem;
`;

export const Footer = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-top: 2.25rem;

	p {
		display: flex;
		align-items: center;

		font-size: 0.75rem;
		line-height: 1.125rem;
		color: #365b80;

		img {
			margin-right: 0.3125rem;
		}
	}

	button {
		background: #ffab1f;
		color: #fff;

		padding: 1rem 5rem;
		border: 0;
		border-radius: 0.3125rem;

		transition: background-color 0.2s;

		&:hover {
			background: ${shade(0.1, '#FFAB1F')};
		}
	}
`;
