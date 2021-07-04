import styled from 'styled-components';

export const Container = styled.div`
	display: flex;

	background: #1e90ff;

	padding: 2rem 0;

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 70rem;
		padding: 0 1.25rem 9.375rem;

		margin: 0 auto;

		div {
			display: flex;
			align-items: center;

			h1 {
				font-weight: normal;
				font-size: 1.5rem;
				color: #fff;
			}
		}

		nav {
			display: flex;
			align-items: center;

			a {
				color: #fff;
				text-decoration: none;
				font-size: 16px;
				transition: opacity 0.2s;

				& + a {
					margin-left: 32px;
				}

				&:hover {
					opacity: 0.6;
				}
			}
		}
	}
`;
