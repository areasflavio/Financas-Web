import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface UploadProps {
	isDragActive: boolean;
	isDragReject: boolean;
	refKey?: string;
	type?: 'error' | 'success' | 'default';
	[key: string]: any;
}

const dragActive = css`
	border-color: var(--color-green);
`;

const dragReject = css`
	border-color: var(--color-red);
`;

export const DropContainer = styled.div.attrs({
	className: 'dropzone',
})`
	border: 1.5px dashed var(--color-gray-100);
	border-radius: 0.25rem;
	cursor: pointer;

	transition: height 0.2s ease;

	${(props: UploadProps): false | FlattenSimpleInterpolation =>
		props.isDragActive && dragActive}

	${(props: UploadProps): false | FlattenSimpleInterpolation =>
		props.isDragReject && dragReject}
`;

const messageColors = {
	default: '#1E90FF',
	error: '#FF4538',
	success: '#31BF0D',
};

export const UploadMessage = styled.p`
	display: flex;
	font-size: 1rem;
	line-height: 1.5;
	padding: 3rem 0;

	color: ${({ type }: UploadProps) => messageColors[type || 'default']};

	justify-content: center;
	align-items: center;
`;
