import styled from 'styled-components';
import Circle from './Circle';
function App() {
	return (
		<div>
			<Circle bgColor='teal' />
			<Circle
				borderColor='yellow'
				bgColor='tomato'
				text='hi text on'
			/>
		</div>
	);
}

export default App;
