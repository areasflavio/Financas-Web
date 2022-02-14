import styled from 'styled-components';

interface CardProps {
	total?: boolean;
}

export const Container = styled.main`
	width: 70rem;

	margin: 0 auto;

	padding: 0 2rem 2rem;
`;

export const CardContainer = styled.section`
	display: grid;
	/* grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr)); */
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 2rem;

	margin-top: -7rem;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;

	padding: 1rem 2rem;
	border-radius: 0.25rem;

	background: ${({ total }: CardProps): string => (total ? '#ffab1f' : '#fff')};
	color: ${({ total }: CardProps): string => (total ? '#fff' : '#365b80')};

	transition: all 0.2s;

	&:hover {
		transform: translateY(-0.5rem);
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		p {
			font-size: 1rem;
		}

		img {
			width: 2rem;
			height: 2rem;
		}
	}

	h1 {
		font-weight: normal;
		font-size: 2.25rem;
		line-height: 3.375rem;

		margin-top: 1rem;
	}
`;

export const TableContainer = styled.section`
	margin-top: 2rem;

	table {
		width: 100%;
		border-spacing: 0 0.5rem;

		th {
			font-weight: normal;
			text-align: left;
			line-height: 1.5rem;
			color: #365b80;

			padding: 1.25rem 2rem;
		}

		td {
			color: #365b80;
			background: #fff;

			padding: 1.25rem 2rem;

			&.title {
				color: #1e90ff;
			}

			&.income {
				color: #31bf0d;
			}

			&.outcome {
				color: #ff4538;
			}
		}

		td:first-child {
			border-radius: 0.25rem 0 0 0.25rem;
		}

		td:last-child {
			border-radius: 0 0.25rem 0.25rem 0;
		}
	}
`;
