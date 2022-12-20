import React, { useState } from 'react';
import styled from 'styled-components';
import Circle from './Circle';

interface dumyProps {
	text: string;
}

function Dumy({ text }: dumyProps) {
	return <h1>{text}</h1>;
}

function App() {
	const Container = styled.div`
		background-color: ${props => props.theme.bgColor};
	`;
	const H1 = styled.h1`
		color: ${props => props.theme.textColor};
	`;
	const Onclick = (e: React.FormEvent<HTMLButtonElement>) => {
		console.log('hi');
		e.preventDefault();
	};
	return (
		<Container>
			<form>
				<button onClick={Onclick}>click me</button>
				<Dumy text='hello' />;
			</form>
		</Container>
	);
}

export default App;
