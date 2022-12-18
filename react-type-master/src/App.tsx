import styled from 'styled-components';
import Circle from './Circle';
function App() {
	return (
		<div>
			<Circle bgColo='teal' />
			<Circle
				borderColor='yellow'
				bgColo='tomato'
				text='hi text on'
			/>
		</div>
	);
}

export default App;
