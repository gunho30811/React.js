import { useEffect, useState } from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setcoins] = useState([]);
	const [Convert, setConvert] = useState(0);
	const [Won, setWon] = useState(0);
	const [Dollar, setDollar] = useState(0);
	const kkk = Won / (Convert * 1418.29);
	const onChange = e => {
		if (e.target.id === 'Won') {
			setWon(e.target.value);
			setDollar(e.target.value * 0.00071);
		} else if (e.target.id === 'Dollar') {
			setDollar(e.target.value);
			setWon(e.target.value * 1418.29);
		}
	};

	const showValue = e => {
		console.log(document.getElementById(``));
		console.log(e.target.value);
		setConvert(e.target.value);
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
			<h3>How Much Do you have?</h3>
			<h3>i want to see my opinion</h3>
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
			<h3>Convert Price</h3>
			<input
				type='text'
				value={kkk}
				readOnly></input>
			<h3>Current Coin Prices </h3>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select
					id='Coin'
					onChange={showValue}>
					{coins.map(coin => (
						<option
							key={coin.id}
							value={coin.quotes.USD.price}
							id={coin.symbol}>
							{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
						</option>
					))}
				</select>
			)}
		</div>
	);
}

export default App;
