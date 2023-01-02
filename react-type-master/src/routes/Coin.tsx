import { useParams } from 'react-router';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Params {
	coinId: string;
}
interface RouteState {
	name: string;
}
const Title = styled.h1`
	color: ${props => props.theme.accentColor};
`;
const Container = styled.div`
	padding: 0px 20px;
	max-width: 480px;
	margin: 0 auto;
`;
const Header = styled.header`
	height: 10vh;
	display: felx;
	justify-content: center;
	align-items: center;
`;

const Loader = styled.span`
	text-algin: center;
`;

function Coin() {
	const [loading, setLoading] = useState(true);
	const { coinId } = useParams<Params>();
	const { state } = useLocation<RouteState>();
	console.log(state.name);
	return (
		<Container>
			<Header>
				<Title>{state.name}</Title>
			</Header>
			{loading ? <Loader>Loading...</Loader> : null}{' '}
		</Container>
	);
}

export default Coin;
