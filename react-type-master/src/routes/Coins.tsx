import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

const Img = styled.img`
	width: 25px;
	height: 25px;
	margin-right: 10px;
`;

const CoinsList = styled.ul``;
const Coin = styled.li`
	background-color: white;
	color: ${props => props.theme.bgColor};
	border-radius: 15px;
	margin-bottom: 10px;
	a {
		align-items: center;
		display: flex;
		padding: 20px;
		transition: color 0.2s ease-in;
	}
	&:hover {
		a {
			color: ${props => props.theme.accentColor};
		}
	}
`;

const Title = styled.h1`
	color: ${props => props.theme.accentColor};
`;
interface CoinObject {
	id: string;
	name: string;
	symbol: string;
	rank: number;
	is_new: boolean;
	is_active: boolean;
	type: string;
}

const Loader = styled.span`
	text-algin: center;
`;

function Coins() {
	const [coins, setCoins] = useState<CoinObject[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(() => console.log(1))();
		(async () => {
			const response = await fetch('https://api.coinpaprika.com/v1/coins');
			const json = await response.json();
			setCoins(json.slice(0, 100));
			setLoading(false);
		})();
		fetch('');
	}, []);
	return (
		<Container>
			<Header>
				<Title>코인</Title>
			</Header>
			{loading ? (
				<Loader>Loading...</Loader>
			) : (
				<CoinsList>
					{coins.map(coin => (
						<Coin key={coin.id}>
							<Link
								to={{
									pathname: `/${coin.id}`,
									state: { name: coin.name },
								}}>
								<Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
								{coin.name}&rarr;
							</Link>
						</Coin>
					))}
				</CoinsList>
			)}
		</Container>
	);
}

export default Coins;
