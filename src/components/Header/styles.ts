import styled from 'styled-components';

export const Container = styled.div`
	display: flex;

	background: var(--color-blue);

	padding: 2rem 0;

	header {
		display: flex;
		align-items: center;

		width: 70rem;
		padding: 0 1.25rem 9.375rem;

		margin: 0 auto;

		div {
			display: flex;
			align-items: center;

			h1 {
				font-weight: normal;
				font-size: 1.5rem;
				color: var(--color-white);
			}
		}

		nav {
			display: flex;
			align-items: center;
			margin-left: auto;

			a {
				color: var(--color-white);
				text-decoration: none;
				font-size: 1rem;
				transition: opacity 0.2s;

				& + a {
					margin-left: 2rem;
				}

				&:hover {
					opacity: 0.6;
				}
			}
		}

		button {
			height: 3rem;

			margin-left: 2rem;

			border: 0;
			border-radius: 0.25rem;
			padding: 0 2rem;

			font-size: 1rem;
			color: var(--color-white);

			background: var(--color-yellow);

			transition: filter 0.2s;

			&:hover {
				filter: brightness(0.9);
			}
		}
	}
`;
