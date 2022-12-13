import styled, { keyframes } from 'styled-components';

const Father = styled.div``;
const rotationAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px;
  }
  100%{
    transform:rotate(0deg);
    border-radius:0px;
  }
`;
const Box = styled.div`
	width: 200px;
	height: 200px;
	background-color: tomato;
	animation: ${rotationAnimation} 1s linear infinite;
	align-items: center;
	justify-content: center;
	display: flex;
	span {
		font-size: 56px;
		&:hover {
			font-size: 100px;
		}
	}
`;

function App() {
	return (
		<div>
			<Father>
				<Box>
					<span>●</span>
				</Box>
			</Father>
		</div>
	);
}

export default App;
