import { useEffect, useState } from 'react';

function WonToDollar() {
	const [Won, setWon] = useState(0);
	const [Dollar, setDollar] = useState(0);
	const onChange = e => {
		if (e.target.id === 'Won') {
			setWon(e.target.value);
			setDollar(e.target.value * 0.00071);
		} else if (e.target.id === 'Dollar') {
			setDollar(e.target.value);
			setWon(e.target.value * 1418.29);
		}
	};

	return (
		<div>
			<h3>How Much Do you have?</h3>
			<input
				id='Won'
				type='text'
				value={Won}
				onChange={onChange}></input>
			<label> &#8361; </label>
			<input
				id='Dollar'
				type='text'
				value={Dollar}
				onChange={onChange}></input>
			<label> &#36;</label>
		</div>
	);
}

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setcoins] = useState([]);
	const showValue = e => {
		console.log(e.target.value);
	};
	// const [convert, setconvert] = useState(0);
	useEffect(() => {
		fetch('https://api.coinpaprika.com/v1/tickers')
			.then(response => response.json())
			.then(json => {
				setcoins(json);
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<h1>The Coins! ({loading ? '' : `${coins.length}`})</h1>
			<WonToDollar />
			<h3>Convert Price</h3>
			<input type='text'></input>
			<h3>Current Prices</h3>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select onChange={showValue}>
					{coins.map(coin => (
						<option key={coin.id}>
							{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}price
						</option>
					))}
				</select>
			)}
		</div>
	);
}

export default App;
