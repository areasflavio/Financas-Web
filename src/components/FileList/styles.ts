import styled from 'styled-components';

export const Container = styled.ul`
	margin-top: 1.25rem;

	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #365b80;

		& + li {
			margin-top: 1rem;
		}
	}
`;

export const FileInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex: 1;

	button {
		border: 0;
		background: transparent;
		color: #ff4538;
		margin-left: 0.3125rem;
		cursor: pointer;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		span {
			font-size: 0.75rem;
			color: #999;
			margin-top: 0.3125rem;
		}
	}
`;
