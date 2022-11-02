import { useState } from 'react';

function Hello() {
	useEffect(() => {
		console.log('i show you Hello');
	}, []);
	return <h1>Hello</h1>;
}

function NoHello() {
	useEffect(() => {
		console.log('i show you NoHello');
	}, []);
	return <h1>NoHello</h1>;
}
//#7 이전 것들을 주석 처리
function useEffect() {
	const [Showing, setShowing] = useState(true);
	const OnClcik_Test = () => setShowing(prev => !prev);
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState('');
	const onClick = () => setValue(prev => prev + 1);
	const onChange = e => setKeyword(e.target.value);
	useEffect(() => {
		if (counter !== 0) console.log('counter', counter);
	}, [counter]);
	useEffect(() => {
		if (keyword !== '' && keyword.length > 5) {
			console.log('SEARCH FOR', keyword);
		}
	}, [keyword]);
	useEffect(() => {
		console.log('CALL THE API....');
	}, []);
	return (
		<div>
			{Showing ? <Hello /> : <NoHello />}
			<button onClick={OnClcik_Test}>{Showing ? 'Hello' : 'NoHello'}</button>
			<hr></hr>
			<input
				value={keyword}
				onChange={onChange}
				type='text'
				placeholder='Search here...'
			/>
			<h1>{counter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}

export default useEffect;
